import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import {Provider} from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="b083f519-f6a6-4e61-8470-d9132afe6cdf" language="en-US">
         <Provider>
        <App />
         </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);

