import { prisma } from "./prismaInit.js";
export async function dbInit() {
  const status_result = await prisma.status.findUnique({
    where: { id: 1 },
    select: { status: true },
  });
  if (status_result == null) {
    await prisma.status.create({ data: { status: "Off" } });
  }
}
