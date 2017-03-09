import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './scss/main.scss';

import { Hello } from './components/Hello';

ReactDOM.render(
  <Hello compiler="Typescript" framework="React" />,
  document.getElementById('example')
);