import { PrismaClient } from '@prisma/client'

// Criamos uma única instância do Prisma para evitar múltiplas conexões
export const prisma = new PrismaClient()