import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles';

import LeftList from './leftList'

const drawerWidth = 240;
const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    backgroundColor:'red'
},
drawerPaperShift: {
    position: 'relative',
    height: '100%',
    width: 0,    
    backgroundColor:'red',
    board:0,
}, 
})
// Drawer自身的样式，只涉及其宽度，在这里处理
// props.open，实际上可使用状态中的open，但这里只有一个级别，直接通过属性传递过来即可
const leftDrawer = ({container, classes,open,handleDrawerClose}) => {

  //console.log('open=',props.open)
  return (<Drawer
    container={container}
    open={open}
    onClose={handleDrawerClose}
    variant= "temporary"
    classes={{
      paper: open ? classes.drawerPaper : classes.drawerPaperShift,
    }}>
    <LeftList />
  </Drawer>)
}
export default withStyles(styles)(leftDrawer);