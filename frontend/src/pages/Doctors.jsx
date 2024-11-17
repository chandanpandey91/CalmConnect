import React from 'react'
import { useParams } from 'react-router-dom'

const Doctors = () => {

  const {speciality} = useParams()

  console.log(speciality) // This will print the speciality parameter from the URL
  return (
    <div></div>
  )
}

export default Doctors