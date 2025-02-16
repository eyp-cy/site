import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import {
  Events,
  Media,
  NC_Members,
  NCs,
  Partners,
  Patrons,
  SessionElements,
  Testimonials,
  Users,
} from './collections'
import { Members } from './collections/member'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  collections: [
    // --- Core  ---
    Users,
    Media,
    // --- Custom  ---
    Events,
    Members,
    NC_Members,
    NCs,
    Partners,
    Patrons,
    SessionElements,
    Testimonials,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db:
    process.env.NODE_ENV === 'development'
      ? vercelPostgresAdapter({
          pool: {
            connectionString: 'postgresql://eyp-cy:eyp-cy_local@127.0.0.1:5432/eyp-cy',
          },
        })
      : vercelPostgresAdapter({
          pool: {
            connectionString: process.env.POSTGRES_URL || '',
          },
        }),
  plugins:
    process.env.NODE_ENV === 'development'
      ? [
          s3Storage({
            collections: {
              [Media.slug]: true,
            },
            bucket: 'eyp-cy-uploads',
            config: {
              endpoint: 'http://localhost:9000',
              credentials: {
                accessKeyId: 'minio_user',
                secretAccessKey: 'minio_password',
              },
              region: 'us-east-1',
              forcePathStyle: true,
            },
          }),
        ]
      : [
          vercelBlobStorage({
            collections: { [Media.slug]: true },
            token: process.env.BLOB_READ_WRITE_TOKEN || '',
          }),
        ],
  sharp,
})
