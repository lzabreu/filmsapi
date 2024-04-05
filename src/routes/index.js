import { Router } from "express";

import userRoutes from "./userRoutes.js";
import notesRoutes from "./notesRoutes.js";
import tagsRoutes from "./tagsRoutes.js";

const routes = Router();
routes.use('/users', userRoutes);
routes.use('/notes', notesRoutes);
routes.use('/tags', tagsRoutes);

export default routes;