import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';


const  recipeState = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: '',
  user_id: 1,
}

const AddNewRecipe = () {
  const [newRecipe, setNewRecipe] = useState(initialState)

  return (
    <Container>
      <Row>
        <Col xs='12' md={{ size: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='title'>Title</Label>
              <Input
                type='text'
                name='title'
                id='title'
                placeholder='Title of recipe'
                onChange={handleChange}
                value={newRecipe.title}
              />
            </FormGroup>
            <FormGroup>
              <Label for='source'>Source</Label>
              <Input
                type='text'
                name='source'
                id='source'
                placeholder='Who created this?'
                onChange={handleChange}
                value={newRecipe.source}
              />
            </FormGroup>
            <FormGroup>
              <Label for='category'>Category</Label>
              <Input
                type='select'
                name='category'
                id='category'
                onChange={handleChange}
                value={newRecipe.category}
              >
                <option>Add category</option>
                <option>Lunch</option>
                <option>Breakfast</option>
                <option>Dinner</option>
                <option>Cookies</option>
                <option>Dessert</option>
                <option>Bread</option>
                <option>Salad</option>
                <option>Soup</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for='ingredients'>Ingredients</Label>
              <Input
                type='textarea'
                name='ingredients'
                id='ingredients'
                placeholder='List of ingredients...'
                onChange={handleChange}
                value={newRecipe.ingredients}
              />
            </FormGroup>
            <FormGroup>
              <Label for='exampleText'>Instructions</Label>
              <Input
                type='textarea'
                name='instructions'
                id='instructions'
                placeholder='Step by step instructions...'
                onChange={handleChange}
                value={newRecipe.instructions}
              />
            </FormGroup>

            <Button type='submit'>Add new recipe</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default AddNewRecipe;

