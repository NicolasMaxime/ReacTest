import React from 'react';
import ReactDOM from 'react-dom';
import AppFighter from './AppFighter/AppFighter'
import {Navbar} from "react-bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <Navbar bg={'dark'} style={{height: "4em"}} />
    <AppFighter />
  </React.StrictMode>,
  document.getElementById('root')
);
