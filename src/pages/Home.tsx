import { Card, Typography } from "@mui/material";
import MuiButton from "@mui/material/Button";

import { styled } from "@mui/material/styles";

export const Button = styled(MuiButton)((props) => ({
  fontFamily: "Fira Code, monospace",
  color: "black",
  fontSize: "2rem",
  border: "none",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
}));

export function Home() {
  return (
    <Card
      sx={{
        fontFamily: "Fira Code, monospace",
        position: "absolute",
        top: "100px",
        left: { xs: "15px", md: "150px", lg: "150px" },
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <h1
        style={{
          fontFamily: "Fira Code, monospace",
          fontSize: "2rem",
        }}
      >
        <span style={{ fontSize: "1.5rem" }}>&lt;name&gt;</span> <br />
        <span style={{ fontSize: "2rem", color: "black", lineHeight: "60px" }}>
          Mateusz Zukowski
          <br />
        </span>{" "}
        <span style={{ fontSize: "1.5rem" }}>&lt;</span>
        <span style={{ letterSpacing: "1px", fontSize: "1.5rem" }}>&#47;</span>
        <span style={{ fontSize: "1.5rem" }}>name&gt;</span>
      </h1>
      <h1
        style={{
          fontFamily: "Fira Code, monospace",
        }}
      >
        <span style={{ fontSize: "1.5rem" }}>&lt;about&gt;</span> <br />
        <Typography
          sx={{
            fontSize: "3rem",
            color: "black",
            lineHeight: "90px",

            fontFamily: "Fira Code, monospace",
          }}
        >
          Artist at heart.{" "}
          <span
            style={{
              backgroundColor: "black",
              color: "white",
              paddingLeft: "10px",
            }}
          >
            The web is my canvas.
          </span>
          <br />
        </Typography>{" "}
        <span style={{ fontSize: "1.5rem" }}>&lt;</span>
        <span style={{ letterSpacing: "1px", fontSize: "1.5rem" }}>&#47;</span>
        <span style={{ fontSize: "1.5rem" }}>about&gt;</span>
      </h1>
      {/* <Button
        sx={{ position: "absolute", bottom: "-300px" }}
        variant="contained"
      >
        Projects
      </Button> */}
    </Card>
  );
}
