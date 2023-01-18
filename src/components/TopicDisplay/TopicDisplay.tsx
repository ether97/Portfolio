import { Typography } from "@mui/material";

type TopicDisplayProps = {
  topic: {
    name: string;
    fontSize: number;
    fontWeight: string;
    color: string;
    top: number;
    left: number;
  };
};

export function TopicDisplay({ topic }: TopicDisplayProps) {
  return (
    <Typography
      sx={{
        position: "absolute",
        top: {
          xs:
            topic.name === "NodeJs"
              ? `${topic.top + 220}px`
              : topic.name === "Socket.IO"
              ? `${topic.top + 210}px`
              : topic.name === "TypeScript"
              ? `${topic.top + 220}px`
              : topic.name === "Redux"
              ? `${topic.top + 170}px`
              : topic.name === "Vite"
              ? `${topic.top + 220}px`
              : topic.name === "MongoDB"
              ? `${topic.top + 210}px`
              : topic.name === "JavaScript"
              ? `${topic.top + 190}px`
              : topic.name === "Material UI"
              ? `${topic.top + 100}px`
              : topic.name === "Bootstrap"
              ? `${topic.top + 300}px`
              : `${topic.top + 190}px`,
          md:
            topic.name === "NodeJs"
              ? `${topic.top + 220}px`
              : topic.name === "Socket.IO"
              ? `${topic.top + 210}px`
              : topic.name === "TypeScript"
              ? `${topic.top + 220}px`
              : topic.name === "Redux"
              ? `${topic.top + 170}px`
              : topic.name === "Vite"
              ? `${topic.top + 220}px`
              : topic.name === "MongoDB"
              ? `${topic.top + 210}px`
              : topic.name === "JavaScript"
              ? `${topic.top + 190}px`
              : topic.name === "Material UI"
              ? `${topic.top + 100}px`
              : topic.name === "Bootstrap"
              ? `${topic.top + 300}px`
              : `${topic.top + 190}px`,
          lg:
            topic.name === "NodeJs"
              ? `${topic.top + 170}px`
              : topic.name === "Socket.IO"
              ? `${topic.top + 160}px`
              : topic.name === "TypeScript"
              ? `${topic.top + 170}px`
              : topic.name === "Redux"
              ? `${topic.top + 170}px`
              : topic.name === "Vite"
              ? `${topic.top + 170}px`
              : topic.name === "MongoDB"
              ? `${topic.top + 160}px`
              : topic.name === "JavaScript"
              ? `${topic.top + 170}px`
              : topic.name === "Material UI"
              ? `${topic.top + 50}px`
              : topic.name === "Bootstrap"
              ? `${topic.top + 250}px`
              : `${topic.top + 140}px`,
        },
        left: "0",
        right: "0",
        textAlign: "center",
        color: topic.color,
        fontSize: {
          xs:
            topic.name === "TypeScript"
              ? `${topic.fontSize - 2.7}rem`
              : topic.name === "Bootstrap"
              ? `${topic.fontSize - 0}rem`
              : `${topic.fontSize - 0.5}rem`,
          md: `${topic.fontSize}rem`,
          lg: `${topic.fontSize + 1}rem`,
        },
        letterSpacing: "10px",
        fontWeight: topic.fontWeight,
        textShadow: topic.name === "TypeScript" ? "white 1px 0 5px" : "",
        zIndex: "100",
        fontFamily: "Fira Code, monospace",
      }}
    >
      {topic.name}
    </Typography>
  );
}
