import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
  );
}
