import React from 'react';
// import ReactDOM from 'react-dom/client';
import AppHeader from "../app-header";
import NewTaskForm from "../new-task-form";
import TodoList from "../todo-list";
import Footer from "../footer";

import "./app.css"

export default class App extends React.Component {
    state = {
        arrTodo: [
            {label:"Drink Beer", completed:true, publicDate:new Date(2016, 0, 1), id:1},
            {label:"Repair car", completed:false,publicDate:new Date(2022, 0, 1), id:2},
            {label:"Read book", completed:false, publicDate:new Date(2021, 0, 4), id:3}
        ]
    }

    render() {
        return (
            <div className="todoapp">
                <AppHeader />
                <NewTaskForm />
                <section className="main">
                    <TodoList todos = {this.state.arrTodo}
                              onDeleted = {(id) => console.log("Delete", id) }/>
                    <Footer />
                </section>
            </div>
        )
    }


}