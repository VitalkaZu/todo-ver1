import React from 'react';
// import ReactDOM from 'react-dom/client';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";

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

export default App;