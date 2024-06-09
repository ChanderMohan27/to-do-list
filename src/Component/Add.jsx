import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
function Add({addTodo}) {

  const [title, settitle] = useState("");
  const [discription, setdiscription] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if(!title || ! discription){
      alert("Title and description can not be empty")
    }

    addTodo(title, discription)
  }

  return (
    <Form className='container' onSubmit={submit}>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h3>Add New Task</h3>
        <Form.Control type="text" value = {title} onChange={(e)=>{settitle(e.target.value)}} placeholder="Title" />

      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Discription</Form.Label>
        <Form.Control type="text" value = {discription} onChange={(e)=>{setdiscription(e.target.value)}} placeholder="Discription" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <Button variant="btn btn-sm btn-success" type="submit">
        Add To-do
      </Button>
    </Form>
  );
}

export default Add;