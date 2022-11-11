import React from 'react';
// import ReactDOM from 'react-dom/client';
import AppHeader from "../app-header";
import NewTaskForm from "../new-task-form";
import TodoList from "../todo-list";
import Footer from "../footer";

import "./app.css"

export default class App extends React.Component {
    maxId = 100;

    state = {
        arrTodo: [
            {label:"Drink Beer", completed:true, publicDate:new Date(2016, 0, 1), id:1},
            {label:"Repair car", completed:false,publicDate:new Date(2022, 0, 1), id:2},
            {label:"Read book", completed:false, publicDate:new Date(2021, 0, 4), id:3}
        ]
    }

    deleteTask = (id) => {

        this.setState(({ arrTodo }) => {

            const idx = arrTodo.findIndex((el) => el.id === id);
            const before = arrTodo.slice(0, idx);
            const after = arrTodo.slice(idx + 1);
            const newArray = [...before, ...after]


            // arrTodo.splice(idx,1);

            return {
                arrTodo:newArray
            }
            // console.log(idx);
        })
    }

    addTask = (text) => {
        const newTask = {
            label:text,
            completed:false,
            publicDate: Date.now(),
            id: this.maxId++}

        this.setState(({ arrTodo }) =>{
            return {
                arrTodo: [...arrTodo, newTask]
            }
        })
    }

    completeTask = (id) => {
        console.log("completed " + id)
    }



    render() {
        return (
            <div className="todoapp">
                <AppHeader />
                <NewTaskForm addTask={this.addTask}/>
                <section className="main">
                    <TodoList todos = {this.state.arrTodo}
                              onDeleted = {this.deleteTask}
                              completeTask = {this.completeTask}/>
                    <Footer />
                </section>
            </div>
        )
    }


}