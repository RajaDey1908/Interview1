// In App.js in a new project

import React from 'react';
import Navigation from './src/navigation/navigation'
import { connect } from 'react-redux'
import * as actionTypes from './src/redux/types/types'


const App = () => {
  return (
    <Navigation />
  );
}


// export default connect()(App);
export default App