import React, { useEffect, useContext } from 'react'

import NoteContext from './Context/NoteContext'
export default function SavedList() {

  const AppContext= useContext(NoteContext)

  useEffect(()=>{
    AppContext.setShowSideNavbar(false)
  },[])
  return (
    <div>
      
    </div>
  )
}
