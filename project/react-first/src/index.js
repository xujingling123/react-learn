//引入react核心库
import React from 'react';
//引入react-dom
import ReactDOM from 'react-dom/client';

import App from './App';
//渲染App组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);