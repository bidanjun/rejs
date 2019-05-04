import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles';

import LeftList from './leftList'

const drawerWidth = 240;
const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    //height: '100%',
    //flexGrow:1,
    width: drawerWidth,
    //backgroundColor:'red'
},
drawerPaperShift: {
    position: 'relative',
    //height: '100%',
    //flexGrow:1,
    width: 0,    
    //backgroundColor:'red',
    board:0,
}, 
drawerModal:{
  position: 'relative',
}
})
// Drawer自身的样式，只涉及其宽度，在这里处理
// props.open，实际上可使用状态中的open，但这里只有一个级别，直接通过属性传递过来即可
const leftDrawer = ({container,isMobile,  classes,open,handleDrawerClose}) => {
   
  const variant=isMobile?"temporary":"permanent";

  //console.log('open=',props.open)
  return (<Drawer
    container={container}
    open={open}
    onClose={handleDrawerClose}
    
    variant={variant}
    //这里覆盖paper的样式
    classes={{
      paper: open ? classes.drawerPaper : classes.drawerPaperShift,
      //modal:classes.drawerModal
    }}
    >
    <LeftList variant={variant}/>
  </Drawer>)
}
export default withStyles(styles)(leftDrawer);