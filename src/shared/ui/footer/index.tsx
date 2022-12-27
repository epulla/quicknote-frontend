import { Box, Grid, Typography, useTheme } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./style.css"

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      id="create-note-section"
      component="section"
      px={{ xs: 5, sm: 10, md: 25 }}
      py={10}
    >
      <Grid container columnGap={1}>
        <Typography>Made with</Typography>
        {theme.palette.mode === "dark" ? (
          <FavoriteBorderIcon style={{ color: "#ff0000" }} />
        ) : (
          <FavoriteIcon style={{ color: "#ff0000" }} />
        )}
        <Typography>
          by{" "}
          <a
            id="epulla"
            href="https://github.com/epulla"
          >
            epulla
          </a>
        </Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
