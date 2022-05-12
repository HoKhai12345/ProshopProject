import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'

const notFount404 = ({ history }) => {

  return (
    <>
    <h1 style={{color:"red"}}>Không tìm thấy bài viết</h1>
    </>
  )
}

export default notFount404
