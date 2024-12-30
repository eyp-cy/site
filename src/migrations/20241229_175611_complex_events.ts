import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "events" RENAME COLUMN "description" TO "short_description";
  ALTER TABLE "events" RENAME COLUMN "image_id" TO "card_image_id";
  ALTER TABLE "events" DROP CONSTRAINT "events_image_id_media_id_fk";
  
  ALTER TABLE "events" ALTER COLUMN "url" DROP NOT NULL;
  ALTER TABLE "events" ADD COLUMN "long_description" varchar;
  ALTER TABLE "events" ADD COLUMN "logo_id" integer;
  ALTER TABLE "events" ADD COLUMN "action_url" varchar;
  DO $$ BEGIN
   ALTER TABLE "events" ADD CONSTRAINT "events_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events" ADD CONSTRAINT "events_card_image_id_media_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  `)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "events" RENAME COLUMN "short_description" TO "description";
  ALTER TABLE "events" RENAME COLUMN "card_image_id" TO "image_id";
  ALTER TABLE "events" DROP CONSTRAINT "events_logo_id_media_id_fk";
  
  ALTER TABLE "events" DROP CONSTRAINT "events_card_image_id_media_id_fk";
  
  ALTER TABLE "events" ALTER COLUMN "url" SET NOT NULL;
  DO $$ BEGIN
   ALTER TABLE "events" ADD CONSTRAINT "events_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  ALTER TABLE "events" DROP COLUMN IF EXISTS "long_description";
  ALTER TABLE "events" DROP COLUMN IF EXISTS "logo_id";
  ALTER TABLE "events" DROP COLUMN IF EXISTS "action_url";`)
}
