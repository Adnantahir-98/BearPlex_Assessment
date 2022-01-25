import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './style.css'


const AddTodo = ({ addTodo }) => {

	const [title, setTitle] = useState('')


	const addTodoHandler = e => {
		e.preventDefault()
		addTodo({
			title,
			completed: false,
		})
	}

	return (
		<Form onSubmit={addTodoHandler}>
			<Form.Group>
			  <Form.Control type='text' id="input_clr" placeholder='Enter Todo Title' onChange={e => setTitle(e.target.value)} />
			</Form.Group>				
		</Form>
	)
}

export default AddTodo