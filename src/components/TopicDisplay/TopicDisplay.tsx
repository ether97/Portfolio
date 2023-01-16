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
              ? `${topic.top + 50}px`
              : topic.name === "Socket.IO"
              ? `${topic.top + 40}px`
              : topic.name === "TypeScript"
              ? `${topic.top + 50}px`
              : topic.name === "Vite"
              ? `${topic.top + 50}px`
              : topic.name === "MongoDB"
              ? `${topic.top + 40}px`
              : topic.name === "Bootstrap"
              ? `${topic.top + 50}px`
              : `${topic.top + 20}px`,
          md: `${topic.top + 20}px`,
          lg: `${topic.top + 20}px`,
        },
        left: {
          xs:
            topic.name === "TypeScript"
              ? `${topic.left + 230}px`
              : topic.name === "NodeJs"
              ? `${topic.left + 400}px`
              : topic.name === "Socket.IO"
              ? `${topic.left - 80}px`
              : topic.name === "MongoDB"
              ? `${topic.left + 150}px`
              : topic.name === "Material UI"
              ? `${topic.left + 220}px`
              : topic.name === "NextJs"
              ? `${topic.left + 30}px`
              : `${topic.left + 170}px`,
          md: `${topic.left + 170}px`,
          lg: `${topic.left + 170}px`,
        },
        color: topic.color,
        fontSize: {
          xs:
            topic.name === "TypeScript"
              ? `${topic.fontSize - 2}rem`
              : `${topic.fontSize}rem`,
          md: `${topic.fontSize}rem`,
          lg: `${topic.fontSize}rem`,
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
