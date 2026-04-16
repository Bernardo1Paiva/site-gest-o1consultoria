import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configura o caminho dos arquivos estáticos baseados no ambiente
const staticPath =
  process.env.NODE_ENV === "production"
    ? path.resolve(__dirname, "public")
    : path.resolve(__dirname, "..", "dist", "public");

app.use(express.static(staticPath));

// Lida com o roteamento no lado do cliente (Single Page Application)
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// Apenas para desenvolvimento local
if (process.env.NODE_ENV !== "production" && process.argv[1] === new URL(import.meta.url).pathname) {
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

// Exportar para Vercel
export default app;
