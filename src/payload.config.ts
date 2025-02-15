import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import {
  EventCollection,
  MediaCollection,
  NC_Collection,
  NC_MemberCollection,
  PagesCollection,
  PartnerCollection,
  PatronCollection,
  SessionElementCollection,
  TestimonialCollection,
  UserCollection,
} from './collections'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: UserCollection.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  collections: [
    // --- Core Collections ---
    UserCollection,
    PagesCollection,
    MediaCollection,
    // --- Custom Collections ---
    EventCollection,
    NC_MemberCollection,
    NC_Collection,
    PartnerCollection,
    PatronCollection,
    SessionElementCollection,
    TestimonialCollection,
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
            connectionString: 'postgresql://nostos:nostos_local@127.0.0.1:5432/nostos',
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
              [MediaCollection.slug]: true,
            },
            bucket: 'nostos-uploads',
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
            collections: { [MediaCollection.slug]: true },
            token: process.env.BLOB_READ_WRITE_TOKEN || '',
          }),
        ],
  sharp,
})
