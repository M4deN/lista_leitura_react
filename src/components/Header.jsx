import React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo_livro.png";

function Header(){
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
                top: 2
              }}
            >
              Lista de Leitura
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    );


}


export default Header