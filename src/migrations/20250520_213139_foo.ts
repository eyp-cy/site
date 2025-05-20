import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_events_core_event_type" AS ENUM('days-of-eyp', 'pre-selection-days', 'national-session', 'youth-summit');
  ALTER TABLE "events" ADD COLUMN "core_event_type" "enum_events_core_event_type";
  ALTER TABLE "partner" ADD COLUMN "description" varchar NOT NULL;
  ALTER TABLE "events" DROP COLUMN IF EXISTS "url";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "events" ADD COLUMN "url" varchar;
  ALTER TABLE "events" DROP COLUMN IF EXISTS "core_event_type";
  ALTER TABLE "partner" DROP COLUMN IF EXISTS "description";
  DROP TYPE "public"."enum_events_core_event_type";`)
}
