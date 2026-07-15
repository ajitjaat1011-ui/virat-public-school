import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

/**
 * Database client for Virat Public School.
 *
 * - In production (Cloudflare Pages), uses Turso (libSQL) via the
 *   @prisma/adapter-libsql driver adapter.
 * - In development, uses the same adapter pointed at a local file or
 *   a remote Turso database, depending on env vars.
 *
 * Required env vars:
 *   DATABASE_URL          — libSQL URL, e.g. libsql://<db>.turso.io  OR  file:./db/local.db
 *   DATABASE_AUTH_TOKEN   — Turso auth token (only for remote Turso)
 */
function createPrismaClient(): PrismaClient {
  const url = process.env.DATABASE_URL ?? 'file:./db/local.db'
  const authToken = process.env.DATABASE_AUTH_TOKEN

  const libsql = createClient({
    url,
    authToken: authToken && authToken.length > 0 ? authToken : undefined,
  })
  const adapter = new PrismaLibSQL(libsql)
  return new PrismaClient({ adapter })
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
