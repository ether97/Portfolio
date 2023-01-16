import { AppBar, Box, Container, Link, Toolbar } from "@mui/material";
import MuiButton from "@mui/material/Button";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  MemoryRouter,
} from "react-router-dom";
import { styled } from "@mui/material/styles";
import CodeOffIcon from "@mui/icons-material/CodeOff";

export const Button = styled(MuiButton)((props) => ({
  fontFamily: "Fira Code, monospace",
  color: "black",

  border: "none",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
}));

export function Navbar() {
  return (
    <Container>
      <AppBar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "transparent",
          color: "black",
          boxShadow: "none",
          height: "70px",
        }}
        position="fixed"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "transparent",
            height: "70px",
          }}
        >
          <div
            style={{
              width: "500px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link
              underline="none"
              component={RouterLink}
              to="/"
              sx={{
                fontFamily: "Fira Code, monospace",
                //   fontWeight: "bold",
                color: "white",
                fontSize: "1.5rem",
              }}
              color="inherit"
            >
              &lt;Home
              <span
                style={{
                  letterSpacing: "1px",
                  fontSize: "1.5rem",
                  color: "black",
                }}
              >
                &#47;
              </span>
              &gt;
            </Link>
            <Link
              underline="none"
              component={RouterLink}
              to="/projects"
              sx={{
                fontFamily: "Fira Code, monospace",
                // fontWeight: "bold",
                color: "white",

                fontSize: "1.5rem",
              }}
              color="inherit"
            >
              &lt;Projects
              <span
                style={{
                  letterSpacing: "1px",
                  fontSize: "1.5rem",
                  color: "black",
                }}
              >
                &#47;
              </span>
              &gt;
            </Link>
            <Link
              underline="none"
              component={RouterLink}
              to="/contact"
              sx={{
                fontFamily: "Fira Code, monospace",
                // fontWeight: "bold",
                color: "white",

                fontSize: "1.5rem",
              }}
              color="inherit"
            >
              &lt;Contact
              <span
                style={{
                  letterSpacing: "1px",
                  fontSize: "1.5rem",
                  color: "black",
                }}
              >
                &#47;
              </span>
              &gt;
            </Link>
            <Button
              size="large"
              sx={{
                fontFamily: "Fira Code, monospace",
                color: "white",
                backgroundColor: "black",
              }}
              color="inherit"
            >
              Resume
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
