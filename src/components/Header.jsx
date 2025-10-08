import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo_livro.png";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = ["Início", "Buscar", "Minha Lista", "Sobre"];

  return (
    <AppBar
      position="static"
      color="primary"
      /*  sx={{
          backgroundColor: "#1e6fb7ff", // um azul mais equilibrado
          boxShadow: 2,
        }} */
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: 56,
              height: 56,
              marginLeft: 6,
              marginRight: 32,
              borderRadius: 8,
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Merriweather', serif",
              fontWeight: 400,
              letterSpacing: 3,
              textTransform: "uppercase",
              lineHeight: 1.1,
              position: "relative",
              top: 2,
            }}
          >
            Lista de Leitura
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {menuItems.map((item) => (
            <Button key={item} sx={{ color: "white", fontSize: "1rem" }}>
              {item}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            color="inherit"
            onClick={handleMenuOpen}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {menuItems.map((item) => (
              <MenuItem key={item} onClick={handleMenuClose}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
