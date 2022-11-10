import React from 'react';
// import ReactDOM from 'react-dom/client';
import AppHeader from "../app-header";
import NewTaskForm from "../new-task-form";
import TodoList from "../todo-list";
import Footer from "../footer";

import "./app.css"

const App = () => {
    const arrTodo = [
        {label:"Drink Beer", completed:true, publicDate:new Date(2016, 0, 1), id:1},
        {label:"Repair car", completed:false,publicDate:new Date(2022, 0, 1), id:2},
        {label:"Read book", completed:false, publicDate:new Date(2021, 0, 4), id:3}
    ]

    return (
        <div className="todoapp">
            <AppHeader />
            <NewTaskForm />
            <section className="main">
                <TodoList todos = {arrTodo}/>
                <Footer />
            </section>
        </div>
    )
}

export default App;