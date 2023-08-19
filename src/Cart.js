import React, { useEffect, useContext } from 'react'

import NoteContext from './Context/NoteContext'

export default function Cart() {
  const AppContext= useContext(NoteContext)

    useEffect(()=>{
      AppContext.setShowSideNavbar(false)
    },[])
  return (
    
    <div>
      
    </div>
  )
}
