import React, { useState } from 'react'
import { Row, Col, Form, Button, Modal } from 'react-bootstrap'

// Icons
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';


const Todo = ({ id, title, editTodo, deleteTodo }) => {
    const [show, setShow] = useState(false);
	const [complete, setComplete] = useState(false)

    const [newTitle, setTitle] = useState(title)

    const handleClose = () => {
    	setShow(false);
    	setTitle(title)
    }
    
    const handleShow = () => setShow(true);

    const editTodoHandler = (title) => {
    	handleClose()
    	const todo = {
    		id,
    		title,
    	}
    	editTodo(todo)
    	setTitle(title)
    }

	return (
		<>
		  <Row className='pt-3 border-bottom border-dark'>
		    <Col md={1}>
		    <Form>
		      <CheckCircleOutlineRoundedIcon 
			  	style={{color:"grey"}}
		        type='checkbox'
		        onClick={() => setComplete(!complete)}
				className={complete === true ? ('text-success') : ('text-secondary')}
		      />
		    </Form>
		    </Col>

		    <Col>
			  {complete === true ? (
				<strike className="text-secondary">{title}</strike>
			  ) : (
				<h5>{title}</h5>
			  )}
		    </Col>

			<Row>
				<Col md={1} className="mx-1">
					<Form>
						<EditRoundedIcon onClick={handleShow} style={{cursor: "pointer"}} color="success" />
					</Form>
				</Col>
				<Col md={1}>
					<Form>
						<DeleteOutlineRoundedIcon onClick={() => deleteTodo(id)} style={{cursor: "pointer"}} color="error" />
					</Form>
				</Col>
			</Row>
		  </Row>

		  <Modal show={show} onHide={handleClose}>
	        <Modal.Header closeButton className="bg-dark text-white" style={{borderColor:"grey"}}>
	          <Modal.Title>Edit Todo</Modal.Title>
	        </Modal.Header>
	        <Modal.Body className="bg-dark text-white">
	        	<Form>
					<Form.Group controlId='title'>
					  <Form.Label>Change The Title</Form.Label>
					  <Form.Control type='text' value={newTitle} onChange={e => setTitle(e.target.value)} style={{background:"#252525", border:"none", borderBottom: "1px solid #bbb", color:"#fff"}} />
					</Form.Group>

				</Form>
	        </Modal.Body>
	        <Modal.Footer className="bg-dark" style={{borderColor:"grey"}}>
			  <Button variant="success" onClick={() => editTodoHandler(newTitle)}>
	            Save Changes
	          </Button>
	          <Button variant="secondary" onClick={handleClose}>
	            Close
	          </Button>
	        </Modal.Footer>
	      </Modal>
		</>
	)
}

export default Todo
