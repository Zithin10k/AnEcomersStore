import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import NoteContext from '../Context/NoteContext'

export default function(props) {
  const AppContext= useContext(NoteContext)
  const productID = useParams('productID')
  useEffect(()=>{
    AppContext.setShowSideNavbar(false)
  },[])


  return (
    <>
      
    </>
  )
}
