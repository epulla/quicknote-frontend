import { CreateNoteInput, GetNoteInput } from "../domain/note.input";
import ApiResponse from "../../shared/domain/api.response";
import NoteRepository from "../domain/note.repository";
import { MAX_LENGTH_NOTE_CONTENT } from "../../shared/defaults.constants";

export const createNote = async (
  noteRepository: NoteRepository,
  { content, expiresIn, maxViews }: CreateNoteInput
) => {
  if (content.length === 0 || content.length >= MAX_LENGTH_NOTE_CONTENT) {
    return Promise.resolve({
      entity: undefined,
      status: 400,
      message: `Note length should be between 1 and ${MAX_LENGTH_NOTE_CONTENT} characters`,
    } as ApiResponse<undefined>);
  }
  return await noteRepository.createNote({ content, expiresIn, maxViews });
};

export const getNote = async (
  noteRepository: NoteRepository,
  { url }: GetNoteInput
) => {
  return await noteRepository.getNote({ url });
};
