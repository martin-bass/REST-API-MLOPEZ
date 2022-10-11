import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());
app.use("/api", employeesRoutes);
app.use(indexRoutes);

//En caso de que no exista la ruta
app.use((req, res, next) => {
  res.status(404).json({ messagge: "endpoint not Found!" });
});

export default app;
