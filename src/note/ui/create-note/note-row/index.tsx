import { Grid, Typography, Switch } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTheme } from "@mui/material/styles";

type NoteRowProps = {
  loading: boolean;
  isAdvancedOptionChecked: boolean;
  handleAdvancedOptionSwitch: () => void;
  handleNoteCreation: () => void;
  noteContent: string;
  children: any;
};

const NoteRow = ({
  loading,
  isAdvancedOptionChecked,
  handleAdvancedOptionSwitch,
  handleNoteCreation,
  noteContent,
  children,
}: NoteRowProps) => {
  const theme = useTheme();
  const OptionsRow = () => (
    <Grid item container direction="column" py={2}>
      <Grid item xs={8}>
        <Grid container direction="row" alignItems="center">
          <Switch
            checked={isAdvancedOptionChecked}
            onChange={handleAdvancedOptionSwitch}
            color={theme.palette.mode === "dark" ? "default" : "primary"}
          />
          <Typography>Advanced</Typography>
        </Grid>
      </Grid>
      <Grid item xs={8} textAlign="end">
        <LoadingButton
          variant={theme.palette.mode === "dark" ? "outlined" : "contained"}
          color="primary"
          loading={loading}
          loadingIndicator="Creating..."
          onClick={handleNoteCreation}
        >
          Create Note
        </LoadingButton>
      </Grid>
    </Grid>
  );
  return (
    <Grid item container>
      {children}
      <OptionsRow />
    </Grid>
  );
};

export default NoteRow;
