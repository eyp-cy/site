import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "events" ALTER COLUMN "url" DROP NOT NULL;
  ALTER TABLE "events" ADD COLUMN "action_url" varchar;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "events" ALTER COLUMN "url" SET NOT NULL;
  ALTER TABLE "events" DROP COLUMN IF EXISTS "action_url";`)
}
