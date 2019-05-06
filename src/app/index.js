import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Layout from './layout'

import LeftList from './leftList'

import AppBar from './appbar'
//const AppBar = () => (<div>appbar</div>)
//const LeftDrawer = () => (<div>left Drawer</div>)

const RightDrawer = () => (<div>right Drawer</div>)
const WorkSpace = () => (<div>work Space</div>)

const styles = theme => ({
  root: {
  },
});

const App = (props) => {
  return (
    <Layout AppBar={AppBar} LeftList={LeftList} RightDrawer={RightDrawer} WorkSpace={WorkSpace} />
  );
}

//withStyles将styles作为属性传递给App
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));