// backend/src/index.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PrismaClient } from './generated/prisma';

const app = express();

// --- Middleware setup ---
app.use(cors());              // allows frontend to access your API
app.use(bodyParser.json());   // parses incoming JSON payloads

// --- Test route ---
app.get('/api/health', (_, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (_, res) => {
    res.send('🎵 HarmonyHub backend is running!');
});

// --- Start server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});



const prisma = new PrismaClient();

const proj1 = await prisma.project.create({
  data: {
    name: "Dream of Sofi",
    email: "masonyou@umich.edu",
    description: "Song for Sofi",
    artist: "Mason"
  }
});

const proj2 = await prisma.project.create({
  data: {
    name: "Mi Amor",
    email: "masonyou@umich.edu",
    description: "Upbeat song for Sofi",
    artist: "Mason"
  }
});

app.get('/api/projects', async (__, res) => {
    const projects = await prisma.project.findMany({
      orderBy: { id: 'desc'},
    });
    res.json(projects);
});