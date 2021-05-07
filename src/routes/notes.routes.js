import {Router} from 'express';
const router = Router();
import * as notesController from '../controllers/notes.controller'

router.get('/', notesController.getNotes)
router.post('/', notesController.createNote)
router.get('/:noteId', notesController.getNotes)
router.put('/:noteId', notesController.updateNoteById)
router.delete('/:noteId', notesController.deleteNoteById)

export default router;