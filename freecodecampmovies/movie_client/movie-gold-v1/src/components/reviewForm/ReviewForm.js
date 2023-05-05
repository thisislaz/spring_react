import React from 'react'
import {Form,Button} from 'react-bootstrap';


const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {

  return (
    <Form>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>{labelText}</Form.Label>
        <Form.Control  red={revText} as="textarea" rows={3} defaultValue={defaultValue} />
      </Form.Group>
      <Button variant='outline0info' onClick={handleSubmit} >Submit</Button>
    </Form>
  )
}

export default ReviewForm