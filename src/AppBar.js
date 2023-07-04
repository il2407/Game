import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "./components/AppBar";
import Toolbar from "./components/Toolbar";

const rightLink = {
  fontSize: 35,
  color: "common.white",
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" color="success">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 36 }}
          >
            {" The Pashtidutza Game"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {/* <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="http://localhost:8888"
              sx={rightLink}
            >
              {"Sign In"}
            </Link> */}
            <Link
              color="white"
              variant="h1"
              underline="none"
              href="https://thumbs.gfycat.com/AnotherWelltodoBeaver-mobile.mp4"
              sx={{ ...rightLink, color: "white" }}
            >
              {" Wanna Give Up ?"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
