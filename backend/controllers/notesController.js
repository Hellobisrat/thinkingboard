
import Note from "../models/Note.js";


export const getNotes = async (req,res)=>{
 try {
   const notes = await Note.find().sort({createdAt:-1})
   res.status(200).json(notes)
 } catch (error) {
  res.status(500).json({message: "Internal server error" })
 }
}

export const getSingleNote = async(req,res)=>{

  const id = req.params.id;
  try {
    const note = await Note.findById(id)
    if(!note){
      return res.status(404).json({ message: "Note not found!" });
    }
    res.status(200).json(note)
  } catch (error) {
    res.status(500).json({message: "Internal server error" })
  }
}

export const postNote = async (req,res)=>{
  try {
    const {title,content} =req.body;
    const note =  await Note.create({title,content})
    res.status(201).json(note)
  } catch (error) {
    res.status(500).json({message: "Internal server error" })
  }
   
}

export const updateNote = async (req, res) => {
  const id = req.params.id;

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;

    await note.save();

    res.status(200).json(note);
  } catch (error) {
    console.error("Update failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export const deleteNote = async (req,res)=>{
    const id = req.params.id
  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully!" });

  } catch (error) {

    res.status(500).json({ message: "Internal server error" });
    
  }
  
}