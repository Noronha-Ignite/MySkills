import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages';

export default function App() {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <Home />
    </Fragment>
  );
}
