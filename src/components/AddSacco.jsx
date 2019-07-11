import React from 'react';
import './App.css';


import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { fade} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { deepPurple } from '@material-ui/core/colors';
// import {

//   NavItem,
//   NavLink,
//   Nav,
//   Container,
//   Row,
//   Col,
//   UncontrolledTooltip
// } from "reactstrap";


const currencies = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Other',
    label: 'Others',
  },
 
];

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(10), 
  },
  input: {
    display: 'none',
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(9),
    marginRight: theme.spacing(100),
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  
  bigAvatar: {
    marginLeft: theme.spacing(10),
    width: 60,
    height: 60,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },

  },
  purpleAvatar: {
    marginLeft: theme.spacing(10),
    margin: 1,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  margin: {
    marginLeft: theme.spacing(10),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
// ==================================================================

function FilledTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      
     
      <TextField
        required
        id="filled-required"
        label="Required"
        defaultValue="Full Name"
        className={classes.textField}
        margin="normal"
        variant="filled"
      /><br/>
     
     <TextField
        id="filled-dense"
        label="National ID Number"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="filled"
      /><br/>
      <TextField
        id="filled-dense"
        label="Lincence Number"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="filled"
      />
      <TextField
        id="filled-dense"
        label="Insurance"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="filled"
      />k
      <TextField
        id="filled-dense"
        label="Base Name"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="filled"
      />
      
    
      
      <TextField
        id="filled-select-currency-native"
        select
        label="Gender"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your Gender"
        margin="normal"
        variant="filled"
      >
        {currencies.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      
     
    </form>
  );
 }
// ==================================================================
function IdAvatars() {
  const classes = useStyles();

  return (
    <Grid container justify="left" alignItems="center">
        <InputBase
        className={classes.margin}
        defaultValue="Upload ID Photo"
        inputProps={{ 'aria-label': 'naked' }}
      />
      <Avatar alt="ID photo"  className={classes.bigAvatar} />
    </Grid>
  );
}
// =====================================================================
 function IdButtons() {
  const classes = useStyles();

  return (
    
      <label htmlFor="contained-button-file">
     
       <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
        <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      </label>
  
  );
}
// ==================================================================
function PassportButtons() {
  const classes = useStyles();

  return (
    
      <label htmlFor="contained-button-file">
     
       <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
        <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />  
      </label>
  
  );
}
// =======================================


function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="Show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="Account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="Show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="Show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
// ===============================================


function PassportAvatars() {
  const classes = useStyles();

  return (
    <Grid container justify="left" alignItems="center" >
       <InputBase
        className={classes.margin}
        defaultValue="Upload Passphoto"
        inputProps={{ 'aria-label': 'naked' }}
      />
    
      <Avatar className={classes.purpleAvatar}>P</Avatar>
    </Grid>
  );
}
// =================================================================


 function SubmitButtons() {
  const classes = useStyles();

  return (
    <div>
      
      <Button variant="contained" color="primary" className={classes.button}>
        Submit
      </Button>
      <Button variant="contained" className={classes.button}>
        Exit
      </Button>
n
     
    </div>
  );
}
// ===========================================================================

// eslint-disable-next-line
function Footer() {
  const classes = useStyles();

  return (
      <>    
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
         Fika Safe
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Your Safety Is Our Priority
        </Typography>
        
      </footer>
        
      </>
    );
  }




//===================================================================

function App() {
  return (
   <><header><PrimarySearchAppBar/>  </header>
   <IdAvatars/>
   <IdButtons/>
   <FilledTextFields/>
   <PassportAvatars/>
   <PassportButtons/><hr/>
   <SubmitButtons/><hr/>
   <footer><Footer/></footer>
   
   </>
   
  );
}


export default App;
