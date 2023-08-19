import NoteContext from "./NoteContext";
import React,{useState} from "react";
import { useMediaQuery } from 'react-responsive'

const NoteState = (props)=>{
  const [showSideNavbar,setShowSideNavbar]=useState(false)
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 600 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 600 })
  const ifMobileorIfLoptop = (a, b) => {
    if (isTabletOrMobile) { console.log('mobile'); return a };
    if (isDesktopOrLaptop) console.log('laptop'); return b;
  }
 return(
   
    <NoteContext.Provider value={{showSideNavbar,setShowSideNavbar,ifMobileorIfLoptop}}>
        {props.children}
    </NoteContext.Provider>
 )
}

export default NoteState