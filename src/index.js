import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js'; //font-awesome을 사용하기 위해서 추가하는 코드
import SimpleHabit from './components/simpleHabit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>
);
