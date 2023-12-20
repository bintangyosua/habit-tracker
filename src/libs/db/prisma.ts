import { PrismaClient } from "@prisma/client";

const prismaInstance = {
  instance: new PrismaClient(),
};

export type IDBClient = typeof prismaInstance;

Object.freeze(prismaInstance);
const prisma = prismaInstance.instance;

export default prisma;
