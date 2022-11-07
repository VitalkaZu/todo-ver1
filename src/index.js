import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));






const App = () => {
    const arrTodo = [
        {label:"Drink Beer", important:false, id:1},
        {label:"Repair car", important:true, id:2},
        {label:"Read book", important:true, id:3}
    ]

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos = {arrTodo}/>
        </div>
    )
}


root.render(<App />);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
