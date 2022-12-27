import {
  Grid,
  Select,
  Typography,
  Paper,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

type AdvancedOptionSelectProps = {
  value: any;
  values: any[];
  keyLabel: string;
  elemCallback?: (elem: any) => any;
  handleChange: (event: SelectChangeEvent) => void;
};

const AdvancedOptionSelect = ({
  value,
  values,
  keyLabel,
  elemCallback = (elem: any) => elem,
  handleChange,
}: AdvancedOptionSelectProps) => (
  <Select
    style={{ width: 75 }}
    value={`${value}`} // value in seconds, it means 30 seconds = 0.5 minutes
    onChange={handleChange}
  >
    {values.map((elem, index) => (
      <MenuItem value={elemCallback(elem)} key={`${keyLabel}-${index}`}>
        {elem}
      </MenuItem>
    ))}
  </Select>
);

type AdvancedOptionsRowProps = {
  isAdvancedOptionChecked: boolean;
  expiresIn: number;
  handleExpiresInSelect: (event: SelectChangeEvent) => void;
  maxViews: number;
  handleMaxViewsInput: (event: SelectChangeEvent) => void;
};

const AdvancedOptionsRow = ({
  isAdvancedOptionChecked,
  expiresIn,
  handleExpiresInSelect,
  maxViews,
  handleMaxViewsInput,
}: AdvancedOptionsRowProps) => {
  const ExpiresInRow = () => (
    <>
      <Grid item xs={4} sm={2}>
        <Typography>Expires in:</Typography>
      </Grid>
      <Grid item xs={8} sm={10} container columnSpacing={2} alignItems="center">
        <Grid item>
          {/* value is in seconds (minutes * 60) */}
          <AdvancedOptionSelect
            keyLabel="minutes"
            values={[0.5, 1, 5, 15, 30, 60]}
            value={`${expiresIn}`}
            handleChange={handleExpiresInSelect}
            elemCallback={(elem) => elem * 60}
          />
        </Grid>
        <Grid item>
          <Typography>Minutes</Typography>
        </Grid>
      </Grid>
    </>
  );
  const MaxViewsRow = () => {
    return (
      <>
        <Grid item xs={4} sm={2}>
          <Typography>Max views:</Typography>
        </Grid>
        <Grid
          item
          xs={8}
          sm={10}
          container
          columnSpacing={2}
          alignItems="center"
        >
          <Grid item>
            <AdvancedOptionSelect
              keyLabel="views"
              values={[1, 2, 3, 5]}
              value={maxViews}
              handleChange={handleMaxViewsInput}
            />
          </Grid>
          <Grid item>
            <Typography>{`Views`}</Typography>
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <Paper style={{ display: isAdvancedOptionChecked ? "inherit" : "none" }}>
      <Grid container p={3} alignItems="center" rowSpacing={3}>
        <ExpiresInRow />
        <MaxViewsRow />
      </Grid>
    </Paper>
  );
};

export default AdvancedOptionsRow;
