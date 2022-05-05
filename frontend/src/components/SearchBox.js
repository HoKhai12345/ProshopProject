import React, { useState } from 'react'
import { Form, Button  } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  console.log("history",history);
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("keyword.trim()",keyword.trim());
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <input
      type='text'
      name='q'
      onChange={(e) => setKeyword(e.target.value)}
      placeholder='Search ...'
      
      />
      {/* <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button> */}
      <button type='submit'><i class="fa fa-search"></i></button>
    </Form>
  )
}

export default SearchBox
