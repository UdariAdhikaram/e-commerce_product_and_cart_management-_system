import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Typography, Badge, Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Home, Info, ContactMail, ShoppingCart, Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const cart = useSelector((state) => state.cart || []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is mobile-sized
  const [drawerOpen, setDrawerOpen] = React.useState(false); // State for mobile drawer

  // Toggle drawer for mobile view
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Navigation items
  const navItems = [
    { text: 'Home', icon: <Home sx={{ fontSize: '1.5rem' }} />, path: '/' },
    { text: 'About', icon: <Info sx={{ fontSize: '1.5rem' }} />, path: '/products' },
    { text: 'Contact', icon: <ContactMail sx={{ fontSize: '1.5rem' }} />, path: '/contact' },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#1976d2', width: '100vw', pl: 5, py: 2 }}>
      <Toolbar>
        {/* Logo or App Name */}
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          E-commerce Store
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            {navItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.path}
                startIcon={item.icon}
                sx={{ marginRight: 2, fontSize: '1.2rem' }}
              >
                {item.text}
              </Button>
            ))}
          </>
        )}

        {/* Cart Button with Badge */}
        <IconButton
          color="inherit"
          component={Link}
          to="/cart"
          sx={{ marginLeft: isMobile ? 'auto' : 2, fontSize: '1.5rem' }}
        >
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{ marginLeft: 2 }}
          >
            <Menu />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;