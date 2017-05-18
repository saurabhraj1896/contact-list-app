import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';

const todos = [
{
	name: 'Saurabh Raj',
	email: 'saurabhraj96@gmail.com',
	phone: '9431640012'
},
{
	name: 'Rahul Sinha',
	email: 'rahulsinha81@gmail.com',
	phone: '8100456407'
}
];

export default class App extends React.Component {
	constructor(props){
		super(props);

		this.state={
			todos
		};
	}

	render() {
		return (
			<div>
			    <h1>Contact List App</h1>
			    <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
			    <TodosList
			        todos={this.state.todos}
			        deleteTask={this.deleteTask.bind(this)}
			    />
			</div>
		);
	}
    

	createTask(contact) {
		this.state.todos.push({
			name: contact.name,
			email: contact.email,
			phone: contact.phone
		});
		this.setState({ todos: this.state.todos });
	}

	deleteTask(contactToDelete) {
		_.remove(this.state.todos, todo => todo.name === contactToDelete.name );
		_.remove(this.state.todos, todo => todo.email === contactToDelete.email );
		_.remove(this.state.todos, todo => todo.phone === contactToDelete.phone )
		this.setState({ todos: this.state.todos });
	}
}
