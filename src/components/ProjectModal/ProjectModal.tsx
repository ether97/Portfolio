import { Box, Modal, Typography } from "@mui/material";

type ProjectModalType = {
  open: boolean;
  setOpen: (params: boolean) => void;
  video: string;
};

export function ProjectModal({ open, setOpen, video }: ProjectModalType) {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        gap: "50px",
      }}
    >
      <Box
        sx={{
          height: "80vh",
          width: "90vw",
          outline: "none",
          boxShadow: "1px -1px 50px white",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "50px",
          //   borderRadius: "10px",
        }}
      >
        <h1
          style={{
            fontFamily: "Fira Code, monospace",
            color: "white",
          }}
        >
          {video === "Portfolio/src/assets/country.mp4"
            ? "Country API Game"
            : video === "Portfolio/src/assets/Chat_App.mp4"
            ? "Socket.IO Chat App"
            : video === "Portfolio/src/assets/clothing_store.mp4"
            ? "E-commerce Clothing App"
            : video === "Portfolio/src/assets/bakery.mp4"
            ? "E-commerce Bakery App"
            : video === "Portfolio/src/assets/folder.mp4"
            ? "MERN Stack Todo App"
            : video === "Portfolio/src/assets/todo.mp4"
            ? "Redux Todo App"
            : video === "Portfolio/src/assets/sudoku.mp4"
            ? "Sudoku Game"
            : ""}
        </h1>
        <video
          src={video}
          width="90%"
          height="600"
          loop={true}
          muted={false}
          autoPlay
        ></video>
      </Box>
    </Modal>
  );
}
