import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AppBar from './appbar'
import Drawer from './drawer'

const styles = theme => ({
    root: {
        display: 'flex',
    },

    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

const ResponsiveDrawer = ({ classes, container }) => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen(state => (!state.mobileOpen));
    };
    return (
        <div className={classes.root}>
            <CssBaseline />

            <AppBar handleDrawerToggle={handleDrawerToggle} />

            <Drawer container={container} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>
                    workspace here!
          </Typography>
            </main>
        </div>
    );
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);