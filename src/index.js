import React from "react";
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import TodoList from './TodoList';
import store from './TodoStore';

const app = document.getElementById("root");
ReactDom.render(<TodoList store={store}/>, app);