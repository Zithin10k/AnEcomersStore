import React from 'react'
import { SideBar } from './styled/SideNavBar.styled'
import { Items } from './styled/StyledNavBar.styled'
import {Link} from "react-router-dom";

export default function SideNavBar() {
  const style = {
    marginRight: 'auto', flexDirection: 'column',
    borderRadius: '10px',

  }
  const listyle={
    border: '2px solid #CFB284',
    padding:'.2rem ',
borderRadius: '10px',
textAlign: 'center',

 

  }
  return (
    <SideBar>

      <Items style={style}>
      <Link id='item'  to="/"><li style={listyle}> Home</li></Link>
           <Link  id='item' to="/Orders"><li style={listyle}>Orders</li></Link>
          <Link id='item' to="/ContactUs"> <li style={listyle}>Contact us</li></Link>
      </Items>
      <div>

      </div>


    </SideBar>
  )
}
