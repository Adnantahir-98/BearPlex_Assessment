import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
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
				<Breadcrumbs aria-label="breadcrumb" className='text-secondary mb-3'>
					<Link underline="hover" color="inherit" href="/">
						View All
					</Link>
					<Link
						underline="hover"
						color="inherit"
					>
						Active
					</Link>
					<Link
					underline="hover"
					color="inherit"
					>
						Completed
					</Link>
				</Breadcrumbs>
		</Form>
	)
}

export default AddTodo