import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import Orders from './Orders/Orders';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Admin from './Admin/Admin';
import Payment from './Payment/Payment';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddServices from './AddServices/AddServices';
import MyOrders from '../OrderBooking/Orders/MyOrders';
import OrderReview from '../OrderBooking/OrderReview/OrderReview';
import ManageServices from './ManageService/ManageServices';


const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin} = useAuth();
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Typography sx={{mt: -7, mx: 5 ,mb: 3}}>DASHBOARD</Typography>
      <Divider />
    
      <Link to={`${url}/customer`}><Button>Customer Details</Button></Link>
      <Link to={`${url}/orders`}><Button>Order Details</Button></Link>
      <Link to={`${url}/pay`}><Button> Payment</Button></Link>
      <Link to={`${url}/review`}><Button> Review</Button></Link>
      {admin && <Box>
        <Link to={`${url}/admin`}><Button> Admin</Button></Link>
        <Link to={`${url}/serviceadd`}><Button> Add a service</Button></Link>
        <Link to={`${url}/manageService`}><Button> Manage Service</Button></Link>
      </Box> }
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <h3>WelCome to Your Dashboard</h3>
        </Route>
        <AdminRoute path={`${path}/admin`}>
          <Admin/>
        </AdminRoute>
        <AdminRoute path={`${path}/serviceadd`}>
          <AddServices/>
        </AdminRoute>
        <AdminRoute path={`${path}/manageService`}>
          <ManageServices/>
        </AdminRoute>
        <Route path={`${path}/orders`}>
          <MyOrders/>
        </Route>
        <Route path={`${path}/pay`}>
          <Payment/>
        </Route>
        <Route path={`${path}/review`}>
          <OrderReview/>
        </Route>
      </Switch>
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
 
  window: PropTypes.func,
};

export default Dashboard;