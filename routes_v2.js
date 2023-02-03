import express from "express";
import { PrismaClient } from "@prisma/client";
const host = "localhost";
const port = 8000;

const prisma = new PrismaClient();
const app = express();

app.get("/on", async (req, res) => {
  const post = await prisma.status.update({
    where: { id: 1 },
    data: { status: "On" },
  });
  res.send(`Power is On`);
});
app.get("/off", async (req, res) => {
  const post = await prisma.status.update({
    where: { id: 1 },
    data: { status: "Off" },
  });
  res.send(`Power is Off`);
});
app.get("/status", async (req, res) => {
  let i = await prisma.status.findUnique({
    where: { id: 1 },
    select: { status: true },
  });
  res.send(`Power status = ${i.status}`);
});
const status_result = await prisma.status.findUnique({
  where: { id: 1 },
  select: { status: true },
});
console.log(status_result.status);
if (status_result == null) {
  prisma.status.create({ data: { status: "Off" } }).then(() => {
    const server = app.listen(port, host, function () {
      console.log(`Server is running on http://${host}:${port}`);
    });
  });
} else {
  const server = app.listen(port, host, function () {
    console.log(`Server is running on http://${host}:${port}`);
  });
}
