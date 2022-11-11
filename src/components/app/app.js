import React from 'react';
// import ReactDOM from 'react-dom/client';
import AppHeader from "../app-header";
import NewTaskForm from "../new-task-form";
import TodoList from "../todo-list";
import Footer from "../footer";

import "./app.css"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "all",
            arrTodo: [
                {label:"Drink Beer", completed:true, publicDate:new Date(2016, 0, 1), id:1},
                {label:"Repair car", completed:false,publicDate:new Date(2022, 0, 1), id:2},
                {label:"Read book", completed:false, publicDate:new Date(2021, 0, 4), id:3}
            ],
            filtered: []
        }

        this.state.filtered = this.state.arrTodo;
        this.chooseFilter = this.chooseFilter.bind(this);
    }

    maxId = 100;



    chooseFilter(category) {
        // this.setState({
        //     filter: category
        // })

        console.log(category);

        if (category === "all") {
            this.setState({
                filtered: this.state.arrTodo

            })
            return
        }

        this.setState({
            filtered: this.state.arrTodo.filter(el => el.completed.toString() === category)
        })

    }

    createTask(label) {
        return {
            label,
            completed: false,
            publicDate: Date.now(),
            id: this.maxId++
        }
    }

    deleteTask = (id) => {

        this.setState(({ arrTodo }) => {

            const idx = arrTodo.findIndex((el) => el.id === id);
            const before = arrTodo.slice(0, idx);
            const after = arrTodo.slice(idx + 1);
            const newArray = [...before, ...after]

            return {
                arrTodo:newArray
            }
        })
    }

    addTask = (text) => {
        const newTask = this.createTask(text);

        this.setState(({ arrTodo }) =>{
            return {
                arrTodo: [...arrTodo, newTask]
            }
        })
    }

    completeTask = (id) => {
        this.setState(({arrTodo}) => {
            const idx = arrTodo.findIndex((el) => el.id === id);
            const oldItem = arrTodo[idx];
            const newItem = {...oldItem,
                completed: !oldItem.completed};
            const before = arrTodo.slice(0, idx);
            const after = arrTodo.slice(idx + 1);
            const newArray = [...before,
                newItem,
                ...after]

            return {
                arrTodo:newArray
            }
        })
    }




    render() {
        const completedTaskCount = this.state.arrTodo.filter(el => !el.completed).length;



        return (
            <div className="todoapp">
                <AppHeader />
                <NewTaskForm addTask={this.addTask}/>
                <section className="main">
                    <TodoList todos = {this.state.filtered}
                              onDeleted = {this.deleteTask}
                              completeTask = {this.completeTask}/>
                    <Footer completed={completedTaskCount} chooseFilter={this.chooseFilter}/>
                </section>
            </div>
        )
    }


}