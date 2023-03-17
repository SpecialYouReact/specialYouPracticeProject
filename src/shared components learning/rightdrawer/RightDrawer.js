import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HeartIcon from "../../shared assets/icons/HeartIcon.svg";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer({ content, setOpen, open }) {
  return (
    <div>
      <React.Fragment key={"anchor"}>
        {/* <Button onClick={() => setRightDrawer(true)}> */}
        {/* <img src={HeartIcon} onClick={() => setRightDrawer(true)} /> */}
        {/* </Button> */}
        <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 500 }}>
            {/* Write your right drawer style here */}
            {content}
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
