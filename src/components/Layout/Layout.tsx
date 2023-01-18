import { AppBar, Container, Link, Toolbar } from "@mui/material";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  MemoryRouter,
  Outlet,
} from "react-router-dom";
import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { useLocation } from "react-router-dom";

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

export function Layout() {
  let location = useLocation();
  return (
    <>
      <Container
        fixed
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <AppBar
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            background: "transparent",
            // color: "bla",
            boxShadow: "none",
            height: "70px",
            width: "100vw",
            // mr: "auto",
          }}
          position="fixed"
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              background: "transparent",
              height: "70px",
            }}
          >
            <Card
              sx={{
                width: { xs: "90vw", md: "600px", lg: "600px" },
                display: "flex",
                justifyContent: "space-between",
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <Link
                underline="none"
                component={RouterLink}
                to="/"
                sx={{
                  fontFamily: "Fira Code, monospace",
                  //   fontWeight: "bold",
                  color:
                    location.pathname === "/" ||
                    location.pathname === "/contact"
                      ? "black"
                      : "white",
                  fontSize: { xs: "0.8rem", md: "1rem", lg: "1rem" },
                  lineHeight: "2rem",
                }}
                color="inherit"
              >
                &lt;Home
                <span
                  style={{
                    letterSpacing: "1px",
                    fontSize: "0.8rem",
                    color:
                      location.pathname === "/" ||
                      location.pathname === "/contact"
                        ? "black"
                        : "white",
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
                  // color: "black",
                  color:
                    location.pathname === "/" ||
                    location.pathname === "/contact"
                      ? "black"
                      : "white",

                  fontSize: { xs: "0.8rem", md: "1rem", lg: "1rem" },
                  lineHeight: "2rem",
                }}
                color="inherit"
              >
                &lt;Projects
                <span
                  style={{
                    letterSpacing: "1px",
                    fontSize: "0.8rem",
                    color:
                      location.pathname === "/" ||
                      location.pathname === "/contact"
                        ? "black"
                        : "white",
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
                  // color: "black",
                  color:
                    location.pathname === "/" ||
                    location.pathname === "/contact"
                      ? "black"
                      : "white",

                  fontSize: { xs: "0.8rem", md: "1rem", lg: "1rem" },
                  lineHeight: "2rem",
                }}
                color="inherit"
              >
                &lt;Contact
                <span
                  style={{
                    letterSpacing: "1px",
                    fontSize: "0.8rem",
                    color:
                      location.pathname === "/" ||
                      location.pathname === "/contact"
                        ? "black"
                        : "white",
                  }}
                >
                  &#47;
                </span>
                &gt;
              </Link>
              <Button
                href="/Resume.pdf"
                size="large"
                sx={{
                  fontSize: { xs: "0.8rem", md: "1rem", lg: "1rem" },

                  fontFamily: "Fira Code, monospace",
                  color: location.pathname === "/projects" ? "black" : "white",
                  backgroundColor:
                    location.pathname === "/projects" ? "white" : "black",
                  lineHeight: "1rem",
                }}
                color="inherit"
              >
                Resume
              </Button>
            </Card>
          </Toolbar>
        </AppBar>
      </Container>
      <Outlet />
    </>
  );
}
