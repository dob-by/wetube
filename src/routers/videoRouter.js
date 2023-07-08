import express from "express";
import {
  watch,
  edit,
  upload,
  deleteVideo,
  trending,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", trending);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
