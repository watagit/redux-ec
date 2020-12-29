import React from 'react'
import { getUserId } from '../reducks/users/selectors'
import { useSelector } from 'react-redux'

const Home = () => {
  const selector = useSelector(state => state)
  const uid = getUserId(selector)

  return (
    <div>
      <div>Home</div>
      <p>{uid}</p>
    </div>
  )
}

export default Home
