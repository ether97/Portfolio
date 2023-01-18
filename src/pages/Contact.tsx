import { Button, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export function Contact() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_spt4hvu",
        "template_1h2qhjy",
        e.currentTarget,
        "QhBtMYJtfWuh9PiUJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <div
      style={{
        backgroundImage: "url(pexels-pixabay-262367.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "start",
        justifyContent: "start",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginLeft: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "3.5rem", md: "6rem", lg: "6rem" },
            color: "black",
            fontFamily: "Playfair Display, serif",
          }}
        >
          Get in touch.
        </Typography>
        <form
          onSubmit={sendEmail}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            label="Name"
            name="from_name"
            // onInput={handleNameInput}
            sx={{
              width: { xs: "95vw", md: "930px", lg: "930px" },
              marginBottom: "10px",
              backgroundColor: "rgba(0,0,0,0.4)",
              "& label": {
                color: "black",
                // fontSize: "2rem",
                fontFamily: "Playfair Display, cursive",
              },
              "& label.Mui-focused": {
                color: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "black",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "none",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
            }}
          >
            Enter Name
          </TextField>
          <TextField
            label="Email"
            name="user_email"
            // onInput={handleEmailInput}
            sx={{
              width: { xs: "95vw", md: "930px", lg: "930px" },

              marginBottom: "10px",
              backgroundColor: "rgba(0,0,0,0.4)",

              "& label": {
                color: "black",
                // fontSize: "2rem",
                fontFamily: "Playfair Display, cursive",
              },
              "& label.Mui-focused": {
                color: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "black",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "none",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
            }}
          >
            Enter Email
          </TextField>
          <TextField
            // helperText="Please enter your name"
            label="Message"
            name="message"
            // onInput={handleMessageInput}
            sx={{
              width: { xs: "95vw", md: "600px", lg: "930px" },

              textAlign: "end",
              backgroundColor: "rgba(0,0,0,0.4)",
              input: { color: "white", textAlign: "end" },
              "& label": {
                color: "black",
                // fontSize: "2rem",
                fontFamily: "Playfair Display, cursive",
              },
              "& label.Mui-focused": {
                color: "black",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "black",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "none",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
            }}
            multiline
            rows={10}
            maxRows={4}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              fontFamily: "Playfair Display, serif",
              // fontSize: "2rem",
              color: "black",
              // lineHeight: "3rem",
              // padding: "0",
              marginTop: "10px",
              backgroundColor: "transparent",

              height: "50px",
              boxShadow: 3,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            {/* <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            Send&nbsp;&nbsp;&nbsp;
          </Typography> */}
            <SendIcon
              sx={{
                transform: "rotate(-30deg)",
                color: "black",
                // scale: "1.5",
                marginBottom: "5px",
                "&:hover": {
                  color: "black",
                },
              }}
            />
          </Button>
        </form>
        {/* <Typography
          sx={{
            fontSize: "2rem",
            color: "black",
            fontFamily: "Playfair Display, serif",
            lineHeight: "4rem",
          }}
        >
          I'm notoriously quick at replying to emails...
        </Typography> */}
      </div>
    </div>
  );
}
