import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        backgroundColor: 'green',
    },
    upside: {
        flexBasic: 'auto',
        backgroundColor: 'red',
        zIndex: theme.zIndex.drawer + 1,
    },
    downside: {
        flexGrow: 1,
        display: 'flex',
        backgroundColor: 'green'
    },
    workSpace: {
        minWidth: 0, // So the Typography noWrap works
        backgroundColor: 'yellow',
        //backgroundColor: theme.palette.background.default,
        flexGrow: 1,
        display: 'flex',
        //flexDirection: 'column',
        // display:'flex', 
        // flexDirection:'column', //方向设为列，也就是垂直方向
        //justifyContent:'center',  //由容器内的项目，来决定是否居中  
    },
    workSpaceShift: {
        backgroundColor: 'yellow',
        //backgroundColor: theme.palette.background.default,
        flexGrow: 1,
        display: 'flex',
        //flexDirection: 'column',
        transition: theme.transitions.create('flex', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    LeftDrawer: {
        backgroundColor: 'blue',
        width: drawerWidth,
    },
    RightDrawer: {
        backgroundColor: 'green',
        width: drawerWidth
    },
});

//我们用div包装四个组件
//这样，其位置在此地统一处理，组件自身面对的是固定的位置、大小，在内部如何居中才需要自行控制
//这样的好处是样式无需传递给组件
const Layout = ({ classes, AppBar, LeftDrawer, RightDrawer, WorkSpace, ...props }) => {
    const [open, setOpen] = useState(false)
    const [openRight, setOpenRight] = useState(false)
    const [logged, setLogged] = useState(false)
    return (
        <div className={classes.root}>
            <div className={classes.upside}>
                <AppBar open={open} logged={logged} openRight={openRight}
                    handleDrawerOpen={() => setOpen(state => !state)}
                    handleSetLogged={() => {
                        setLogged((state) => !state)
                        if (openRight)
                          setOpenRight(false);
                    }}
                    toggleRightDrawer={() => setOpenRight(state => !state)}
                />
            </div>
            <div className={classes.downside}>
                {open && (<div className={classes.LeftDrawer}>
                    <LeftDrawer open={open} handleDrawerClose={() => setOpen(false)} />
                </div>)}

                <div className={classes.workSpaceShift}>
                    <WorkSpace />
                </div>
                {openRight && (<div className={classes.RightDrawer}>
                    <RightDrawer />
                </div>)
                }
            </div>
        </div>
    );
}

export default withStyles(styles)(Layout);