import express from "express";
import { courseController } from "../app/controllers/CourseController.js";
const courseRouter = express.Router();

courseRouter.use('/nodejs', courseController.nodejs);
courseRouter.use('/javascript', courseController.javascript);
courseRouter.use('/', courseController.index);

export { courseRouter };