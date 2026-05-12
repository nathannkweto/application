import React from 'react';
import {
  AppBar,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material';

const navWidth = 240;

export default function Layout ({ children }) {
  const navItems = [
    { text: "Home", link: "/" },
    { text: "Curriculum", link: "/curriculum" },
    { text: "Somewhere", link: "/curriculum" },
  ];
  return (
    <div>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'white',
          borderBottom: '1px solid #e0e0e0',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <h1 style={{ color: 'black' }}>My Application</h1>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent"
        sx={{
          width: navWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: navWidth },
        }}
      >
        <Toolbar />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx= {{
          flexGrow: 1,
          p: 2,
          minHeight: '100vh',
          marginLeft: `${navWidth}px`,      }}>
        {children}
      </Box>
    </div>
  );
}