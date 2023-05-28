import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./menu";

function Header() {
  const [menuIsOpen, toggleMenu] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleMenu(!menuIsOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Menu isOpen={menuIsOpen} toggleMenu={toggleMenu} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gerenciamento de Projetos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
