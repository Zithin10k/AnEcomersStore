import React,{useState} from 'react'
import { StyledNavbar, Items } from './styled/StyledNavBar.styled'
import SideNavBar from './SideNavBar'
import { useMediaQuery } from 'react-responsive'
import {Link} from "react-router-dom";
export default function Navbar() {
  const [showSidebar,setShowSidebar]=useState(false)
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 600 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 600 })
  const ifMobileorIfLoptop = (a, b) => {
    if (isTabletOrMobile) { console.log('mobile'); return a };
    if (isDesktopOrLaptop) console.log('laptop'); return b;
  }
  return (
    <>
    <StyledNavbar fontSize={ifMobileorIfLoptop(1.1, 1.5)}>
   {showSidebar &&<SideNavBar> </SideNavBar>}
      {ifMobileorIfLoptop(true, false) &&
      <div  onClick={()=>setShowSidebar((showSidebar)?false:true)} >
        
        {
        !(showSidebar)?
        
            <svg 
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width='37px' height='37px' viewBox="0 0 72 72"
            style={{ fill: "#cfb284" }}>
              <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
            </svg>
            :
<svg fill="#CFB284" width="30px" height="30px" viewBox="0 0 32.311 32.311" xmlns="http://www.w3.org/2000/svg" stroke="#CFB284"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(-96.951 -642.343)"> <path d="M125.2,644.343a2.062,2.062,0,0,1,2.06,2.059v24.191a2.062,2.062,0,0,1-2.06,2.06H101.011a2.063,2.063,0,0,1-2.06-2.06V646.4a2.063,2.063,0,0,1,2.06-2.059H125.2m0-2H101.011a4.059,4.059,0,0,0-4.06,4.059v24.191a4.06,4.06,0,0,0,4.06,4.06H125.2a4.06,4.06,0,0,0,4.06-4.06V646.4a4.059,4.059,0,0,0-4.06-4.059Z"></path> <path d="M120.862,667.253a1,1,0,0,1-.707-.293l-15.511-15.51a1,1,0,0,1,1.414-1.414l15.511,15.51a1,1,0,0,1-.707,1.707Z"></path> <path d="M105.351,667.253a1,1,0,0,1-.707-1.707l15.511-15.51a1,1,0,0,1,1.414,1.414l-15.511,15.51A1,1,0,0,1,105.351,667.253Z"></path> </g> </g></svg> 
        }

    
            </div>}
      {ifMobileorIfLoptop(false, true) && <>
        <img src={require('./img/logo.png')} />
        <Items style={{marginRight:'auto'}}>
         <Link id='item'  to="/"> <li> Home</li></Link>
           <Link  id='item' to="/ContactUs"><li>Orders</li></Link>
           <Link id='item' to="/About"><li>Contact us</li></Link>
        </Items>
      </>}
      {ifMobileorIfLoptop(true, false) && <h2 onClick={()=>setShowSidebar((showSidebar)?false:true)}> Leela and Jaya</h2>}
      <Items>
        <li><Link to='/SavedList'>
        <svg width={ifMobileorIfLoptop('30px', '45px')} height={ifMobileorIfLoptop('30px', '45px')} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#CFB284"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

          </Link>

        </li>
        <li>
        <Link to='/Cart'>
        <svg width={ifMobileorIfLoptop('30px', '45px')} height={ifMobileorIfLoptop('30px', '45px')} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#CFB284" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </Link>
        
        </li>
      </Items>
  </StyledNavbar>

    </>
  )
}