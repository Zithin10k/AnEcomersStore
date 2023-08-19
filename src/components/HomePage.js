import React, { useEffect, useContext } from 'react'
import Banner from './Banner'
import ScrollList from './ScrollList'
import Collections from './Collections'
import NoteContext from '../Context/NoteContext';

export default function HomePage() {
  const AppContext= useContext(NoteContext)

    useEffect(()=>{
      AppContext.setShowSideNavbar(false)
    },[])
  return (
    <>
      <Banner />
      <ScrollList height={'17rem'} wrap={AppContext.ifMobileorIfLoptop('nowrap','wrap')}></ScrollList>
      <Collections></Collections>
      
    </>
  )
}
