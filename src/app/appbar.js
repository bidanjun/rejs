import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

//import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutline from '@material-ui/icons/PersonOutline';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';


const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: 'relative'
  },

  //这里标题将扩展，login按钮在appbar最右端
  grow: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
})

const MenuBar = (props) => {
  const { classes } = props;
  const {open, logged,handleSetLogged,handleDrawerOpen,toggleRightDrawer} = props
  return (<AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={classNames(classes.menuButton, open && classes.hide)}>
          <MenuIcon />
        </IconButton>
        <FormGroup>
    <FormControlLabel
      control={
        <Switch checked={logged} onChange={handleSetLogged} aria-label="LoginSwitch" />
      }
      label={logged ? 'Logout' : 'Login'}
    />
  </FormGroup>
  <Typography variant="h6" color="inherit" className={classes.grow}>
    Team
  </Typography>

  {logged ? (
    <div>
      <IconButton
        onClick={toggleRightDrawer}
        color="inherit"
      >
        <PersonIcon />
      </IconButton>
    </div>):(<IconButton color="inherit">
        <PersonOutline />
                
  </IconButton>)
  }

      </Toolbar>
      </AppBar>)
}
export default withStyles(styles)(MenuBar);
