import React, { useState, useEffect } from 'react'
import './App.css';
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import axios from 'axios'


function App() {
	
	const [todos, setTodos] = useState([])
	const [complete, setComplete] = useState(false)

	const getTodos = async () => {
		try {
			const response = await axios.get('/api/todo/')
			const { data } = response
			setTodos(data)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		getTodos()
	}, [])

	const addTodo = async newTodo => {
		try {
			console.log(newTodo)
			await axios.post('/api/todo/', newTodo)
			getTodos()
		} catch (err) {
			console.log(err)
		}
	}

	const editTodo = async todo => {
		try {
			await axios.put(`/api/todo/${todo.id}/`, todo)
			getTodos()
		} catch(err) {
			console.log(err)
		}
	}

	const deleteTodo = async id => {
		try {
			await axios.delete(`/api/todo/${id}/`)
			getTodos()
		} catch(err) {
			console.log(err)
		}
	}
	

	return (
		<div className='App'>
			<Container>
				<Row className='justify-content-center pt-5'>
					<Col md={6} className='shadw pb-3 px-3 rounded bg_clr'>
						<Card className='p-4 mt-4 border-0' id="bg_clr">
							<h3>Todo List</h3>

							<AddTodo addTodo={addTodo} />

							{todos.map((todo, index) => (
								<Todo key={index} id={todo.id} title={todo.title} description={todo.description} editTodo={editTodo} deleteTodo={deleteTodo} />
							))}

						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
