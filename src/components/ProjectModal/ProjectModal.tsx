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
      }}
    >
      <Box
        sx={{
          height: "80vh",
          width: "50vw",
          outline: "none",
          boxShadow: "1px -1px 50px white",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          //   borderRadius: "10px",
        }}
      >
        <h1
          style={{
            fontFamily: "Fira Code, monospace",
            color: "white",
          }}
        >
          CHAT.IO OVERVIEW
        </h1>
        <video
          src={video}
          width="900"
          height="600"
          loop={true}
          muted={true}
          autoPlay
        ></video>
      </Box>
    </Modal>
  );
}
