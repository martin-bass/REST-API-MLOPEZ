import { Router } from "express";
import * as employeesController from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", employeesController.getEmployees);
router.get("/employees/:id", employeesController.getEmployee);
router.post("/employees", employeesController.createEmployee);
router.patch("/employees/:id", employeesController.updateEmployee);
router.delete("/employees/:id", employeesController.deleteEmployee);

export default router;
