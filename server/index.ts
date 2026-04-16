import express from "express";
import { createServer } from "http";
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

// Verifica se NÃO estamos na Vercel (produção) para rodar localmente
if (process.env.NODE_ENV !== "production") {
  const server = createServer(app);
  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

// O segredo para funcionar na Vercel: Exportar o app
export default app;