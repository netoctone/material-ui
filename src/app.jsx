import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import TimePicker from './time-picker';

injectTapEventPlugin();

ReactDOM.render(
  <div style={{textAlign: 'center', paddingTop: 200}}>
    <TimePicker format="ampm" />
  </div>,
  document.getElementById('app')
);
