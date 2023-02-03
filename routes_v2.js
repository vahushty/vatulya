import express from "express";
import { dbInit } from "./dbInit.js";
import { prisma } from "./prismaInit.js";

const host = "localhost";
const port = 8000;

const app = express();

app.get("/on", async (req, res) => {
  await prisma.status.update({
    where: { id: 1 },
    data: { status: "On" },
  });
  res.send(`Power is On`);
});
app.get("/off", async (req, res) => {
  await prisma.status.update({
    where: { id: 1 },
    data: { status: "Off" },
  });
  res.send(`Power is Off`);
});
app.get("/status", async (req, res) => {
  let state = await prisma.status.findUnique({
    where: { id: 1 },
    select: { status: true },
  });
  res.send(`Power status = ${state.status}`);
});
dbInit(prisma);
app.listen(port, host, function () {
  console.log(`Server is running on http://${host}:${port}`);
});
