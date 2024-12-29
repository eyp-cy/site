import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TABLE IF NOT EXISTS "nc_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "nc" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" numeric NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "nc_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"nc_member_id" integer
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "nc_id" integer;
  DO $$ BEGIN
   ALTER TABLE "nc_members" ADD CONSTRAINT "nc_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nc"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nc_rels" ADD CONSTRAINT "nc_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."nc"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nc_rels" ADD CONSTRAINT "nc_rels_nc_member_fk" FOREIGN KEY ("nc_member_id") REFERENCES "public"."nc_member"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "nc_members_order_idx" ON "nc_members" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nc_members_parent_id_idx" ON "nc_members" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nc_created_at_idx" ON "nc" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "nc_rels_order_idx" ON "nc_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "nc_rels_parent_idx" ON "nc_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "nc_rels_path_idx" ON "nc_rels" USING btree ("path");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_nc_fk" FOREIGN KEY ("nc_id") REFERENCES "public"."nc"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  `)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP TABLE "nc_members";
  DROP TABLE "nc";
  DROP TABLE "nc_rels";
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_nc_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "nc_id";`)
}
