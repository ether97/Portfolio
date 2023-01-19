import { Card, Grid, Modal, Paper, Typography } from "@mui/material";
import { TopicDisplay } from "../components/TopicDisplay/TopicDisplay";
import { styled } from "@mui/material/styles";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { ProjectModal } from "../components/ProjectModal/ProjectModal";
import { useState } from "react";

import VIDEO1 from "../assets/Chat_App.mp4";
import VIDEO2 from "../assets/clothing_store.mp4";
import VIDEO3 from "../assets/country.mp4";
import VIDEO4 from "../assets/folder.mp4";
import VIDEO5 from "../assets/sudoku.mp4";
import VIDEO6 from "../assets/todo.mp4";
import VIDEO7 from "../assets/bakery.mp4";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  margin: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "10px",
  height: "50%",
  marginBottom: "5px",
  backgroundColor: "black",
  // borderRadius: "5px",
  outline: "294px solid transparent",
  color: "black",
  outlineOffset: "-152",
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": {
    outline: "1px solid white",
    outlineOffset: "0px",
    color: "white",
  },
}));

export function Projects() {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState("");

  function handleClick(video: string) {
    setOpen(true);
    setVideo(video);
  }
  const topics = [
    {
      name: "Redux",
      fontSize: 3,
      fontWeight: "600",
      color: "rgba(255,255,255,0.1)",
      top: 110,
      left: 200,
      zIndex: 50,
    },
    {
      name: "TypeScript",
      fontSize: 5.5,
      fontWeight: "100",
      color: "rgba(255,255,255,1)",
      top: 0,
      left: 0,
    },
    {
      name: "JavaScript",
      fontSize: 2,
      fontWeight: "500",
      color: "rgba(255,255,255,0.5)",
      top: 100,
      left: 100,
    },
    {
      name: "Material UI",
      fontSize: 2,
      fontWeight: "bold",
      color: "rgba(255,255,255,0.1)",
      top: 80,
      left: 20,
    },
    {
      name: "NodeJs",
      fontSize: 3,
      fontWeight: "400",
      color: "rgba(255,255,255,0.2)",
      top: 20,
      left: -130,
    },
    {
      name: "Vite",
      fontSize: 3.2,
      fontWeight: "300",
      color: "rgba(255,255,255,0.2)",
      top: -20,
      left: 100,
    },
    {
      name: "Bootstrap",
      fontSize: 1.5,
      fontWeight: "600",
      color: "rgba(255,255,255,0.1)",
      top: -30,
      left: 180,
    },
    {
      name: "Socket.IO",
      fontSize: 2.2,
      fontWeight: "700",
      color: "rgba(255,255,255,0.1)",
      top: 30,
      left: 450,
    },
    {
      name: "MongoDB",
      fontSize: 2,
      fontWeight: "200",
      color: "rgba(255,255,255,0.4)",
      top: 0,
      left: 300,
    },
    {
      name: "NextJs",
      fontSize: 3,
      fontWeight: "300",
      color: "rgba(255,255,255,0.2)",
      top: 70,
      left: 390,
    },
    // {
    //   name: "Git",
    //   fontSize: "2rem",
    //   fontWeight: "400",
    //   color: "rgba(255,255,255,0.3)",
    //   top: -60,
    //   left: 250,
    // },
  ];
  return (
    <div
      style={{
        height: "270vh",
        width: "100vw",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0px",
        margin: "0px",
        overflow: "hidden",
      }}
    >
      <Card
        sx={{
          backgroundColor: "black",
          color: "white",
          fontFamily: "Fira Code, monospace",
          height: "700px",
          width: "100vw",
          zIndex: "100",
        }}
      >
        {topics.map((topic) => (
          <TopicDisplay topic={topic} />
        ))}
        <Typography
          sx={{
            fontFamily: "Fira Code, monospace",
            fontSize: "1rem",
            color: "white",
            textAlign: "center",
            lineHeight: "0px",
            position: "absolute",
            // bottom: "200px",
            top: "400px",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Seek and you shall find...{" "}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            lineHeight: "0px",
            position: "absolute",
            // bottom: "200px",
            top: "420px",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <KeyboardDoubleArrowDownIcon />
        </Typography>
      </Card>
      <Grid
        container
        sx={{
          backgroundColor: "black",
          width: "80vw",
          position: "absolute",
          zIndex: "100",
          top: "500px",
          padding: "0px",
          margin: "0px",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "transparent",
            border: "none",
            fontFamily: "Fira Code, monospace",
          }}
        >
          <Item
            sx={{
              height: "50vh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <StyledCard onClick={() => handleClick(VIDEO3)}>
              <Typography
                sx={{
                  zIndex: "100",
                  fontSize: { xs: "1rem", md: "2rem", lg: "3rem" },

                  fontFamily: "Fira Code, monospace",
                }}
              >
                Live Country API Game
              </Typography>
              <p>Backend communication via ReduxJs/Toolkit</p>
              <p>Stunning visuals via Material UI</p>
              <p>Framework mastery via React</p>
              <p>TypeScript mastery</p>
            </StyledCard>

            <StyledCard onClick={() => handleClick(VIDEO4)}>
              <Typography
                sx={{
                  zIndex: "100",
                  fontFamily: "Fira Code, monospace",
                  fontSize: { xs: "1rem", md: "2rem", lg: "3rem" },
                  lineHeight: "3rem",
                }}
              >
                MERN Todo Application
              </Typography>
              <p>MongoDB Schema/Model/Collection Proficiency</p>
              <p>Backend communication via ReduxJs/Toolkit</p>
              <p>Stunning visuals via Material UI</p>
              <p>Framework mastery via React</p>
              <p>TypeScript mastery</p>
            </StyledCard>
          </Item>
        </Grid>

        <Grid item xs={12}>
          <Item sx={{ height: "50vh", backgroundColor: "transparent" }}>
            <StyledCard
              sx={{ height: "100%" }}
              onClick={() => handleClick(VIDEO1)}
            >
              <Typography
                sx={{
                  zIndex: "100",
                  fontFamily: "Fira Code, monospace",
                  fontSize: { xs: "1rem", md: "2rem", lg: "3rem" },
                }}
              >
                Chat.IO Application
              </Typography>
              <p>Web client and server communication via Socket.IO</p>
              <p>Backend communication via Express/NodeJS</p>
              <p>Stunning visuals via Material UI</p>
              <p>Framework mastery via React</p>
              <p>TypeScript mastery</p>
            </StyledCard>
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <Item
            sx={{
              height: "50vh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <StyledCard onClick={() => handleClick(VIDEO6)}>
              <Typography
                sx={{
                  zIndex: "100",
                  fontFamily: "Fira Code, monospace",
                  fontSize: { xs: "1rem", md: "2rem", lg: "3rem" },
                }}
              >
                Redux Todo Application
              </Typography>

              <p>Backend communication via ReduxJs/Toolkit</p>
              <p>Stunning visuals via Material UI</p>
              <p>Framework mastery via React</p>
              <p>TypeScript mastery</p>
            </StyledCard>
            <StyledCard onClick={() => handleClick(VIDEO2)}>
              <Typography
                sx={{
                  zIndex: "100",
                  fontSize: { xs: "1rem", md: "2rem", lg: "3rem" },

                  fontFamily: "Fira Code, monospace",
                }}
              >
                Clothing E-commerce Store
              </Typography>
              <p>Stunning visuals via Bootstrap</p>
              <p>Framework mastery via React</p>
              <p>TypeScript mastery</p>
            </StyledCard>
          </Item>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <Item
            sx={{
              height: "50vh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <StyledCard onClick={() => handleClick(VIDEO7)}>
              <Typography
                sx={{
                  zIndex: "100",
                  fontFamily: "Fira Code, monospace",
                  fontSize: { xs: "1rem", md: "2rem", lg: "3rem" },
                }}
              >
                Bakery E-Commerce Store
              </Typography>
              <p>Stunning visuals via Bootstrap</p>
              <p>Framework mastery via React</p>
              <p>TypeScript mastery</p>
            </StyledCard>
            <StyledCard onClick={() => handleClick(VIDEO5)}>
              <Typography
                sx={{
                  zIndex: "100",
                  fontFamily: "Fira Code, monospace",

                  fontSize: { xs: "1rem", md: "2rem", lg: "3rem" },
                }}
              >
                Sudoku Game
              </Typography>
              <p>Stunning visuals via Material UI</p>
              <p>Framework mastery via React</p>
              <p>TypeScript mastery</p>
            </StyledCard>
          </Item>
        </Grid>
      </Grid>
      <ProjectModal open={open} setOpen={setOpen} video={video} />
    </div>
  );
}
