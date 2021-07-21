import { Router } from "express";
const router = Router();

import * as carsCtrl from "../controllers/cars.controller";
import { authJwt } from "../middlewares";

router.post(
  "/", 
  [authJwt.verifyToken, authJwt.isAdmin], 
  carsCtrl.createCars
);
router.get("/", carsCtrl.getCars);
router.get("/:carId", carsCtrl.getCarById);
router.put(
  "/:carId",
  [authJwt.verifyToken, authJwt.isAdmin],
  carsCtrl.updateCarById
);
router.delete(
  "/:carId",
  [authJwt.verifyToken, authJwt.isAdmin],
  carsCtrl.deleteCarById
);

export default router;
