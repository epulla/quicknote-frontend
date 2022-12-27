import { Grid, TextareaAutosize, Typography, useTheme } from "@mui/material";
import { MAX_LENGTH_NOTE_CONTENT } from "../../../../shared/defaults.constants";

type NoteInputComponentProps = {
  noteContent: string;
  handleNoteContentChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

const NoteInputComponent = ({
  noteContent,
  handleNoteContentChange,
}: NoteInputComponentProps) => {
  const theme = useTheme();
  return (
    <Grid item container direction="column" component="form">
      <Typography variant="h5">note</Typography>
      <TextareaAutosize
        minRows={7}
        placeholder="Start typing something..."
        onChange={handleNoteContentChange}
        style={{
          fontSize: "1.5rem",
          backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#fff",
          color: theme.palette.mode === "dark" ? "#fff" : "#121212",
        }}
      />
      <Typography style={{color: noteContent.length >= MAX_LENGTH_NOTE_CONTENT ? "#ff0000" : ""}}>{noteContent.length}/{MAX_LENGTH_NOTE_CONTENT}</Typography>
    </Grid>
  );
};

export default NoteInputComponent;
