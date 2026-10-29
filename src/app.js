import routes from "./routes/peliculas-routes.js";
import express from "express";

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3000, () =>
  console.log("Servidor escuchando en http://localhost:3000"),
);
