import {
  Drawer,
  Box,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorModeContext } from "../colorMode.context";
import { deepPurple } from "@mui/material/colors";
import LogoutIcon from "@mui/icons-material/Logout";

const Menu = ({ toggleMenu, isOpen }) => {
  const { mode, toggleColorMode } = useColorModeContext();
  const usuario = localStorage.getItem("usuario");
  return (
    <Drawer anchor={"left"} open={isOpen} onClose={() => toggleMenu(false)}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar> Olá,{usuario}
        <LogoutIcon
          sx={{ cursor: "pointer" }}
          onClick={() => {
            localStorage.removeItem("usuario");
            window.location.reload();
          }}
        />
      </Box>
      <Box role="presentation">
        <List onClick={() => toggleMenu(false)}>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
        onClick={toggleColorMode}
      >
        mudar para {mode} mode
        <IconButton sx={{ ml: 1 }} color="inherit">
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Drawer>
  );
};
export default Menu;
