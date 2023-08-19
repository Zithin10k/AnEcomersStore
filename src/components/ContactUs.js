import React, {useContext, useEffect} from 'react'
import { Items } from './styled/StyledNavBar.styled'
import NoteContext from '../Context/NoteContext'
export default function ContactUs() {
  const AppContext= useContext(NoteContext)

  const imgStyle={
    width:'95%',
    maxWidth:'500px',
    minWidth:'200px',
    borderRadius:'10px'
  }

  useEffect(()=>{
    AppContext.setShowSideNavbar(false)
  },[])
  return (
    <div style={{display:'flex',flexWrap:'wrap',margin:'1rem .5rem',padding:'.3rem',justifyContent:'space-evenly',alignItems:'center',
                  fontFamily:'sans-serif', fontWeight:'bold',fontSize:'1.3rem', border:'3px double #CFB284',color:'#CFB284',boxShadow: '12px 12px 2px 1px rgb(174, 174, 174)',}}>
      <img style={imgStyle} src={require('./img/shope.jpg')} alt="" srcset="" />
      <div style={{margin:'3rem auto auto 1rem'}}>
        <div>        Call: 0000 000 000 </div>
        <div>        Mail: arietnn@nte.net</div>
        <div>Vist Us Offilne</div>


        
      </div>
    </div>
  )
}
