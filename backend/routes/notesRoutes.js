import express from "express";
import {
  getNotes,
  getSingleNote,
  updateNote,
  postNote,
  deleteNote,
} from '../controllers/notesController.js'

const route = express.Router();

route.get("/", getNotes);

route.get("/:id", getSingleNote);

route.post("/", postNote);

route.put("/:id", updateNote);

route.delete("/:id", deleteNote);

export default route;
