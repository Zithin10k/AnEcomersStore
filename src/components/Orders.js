import React from 'react'
import Container from './styled/Container'
import { ScrollBar } from './styled/ScroolBar.styled'
import { ScrollingItems } from './styled/ScrollingItems.styled'
import { Tag } from './styled/Tag.styled'
import { useMediaQuery } from 'react-responsive'
import Price from './Price'

  export default function Orders(props) {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 600 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 600 })

    const ifMobileorIfLoptop = (a, b) => {
      if (isTabletOrMobile) { console.log('mobile'); return a };
      if (isDesktopOrLaptop) console.log('laptop'); return b;
    }
  const items=['./img/item.jpeg','./img/item.jpeg','./img/item.jpeg']

  const style={
    padding:'.7rem .3rem',
    margin:'1rem auto',
    backgroundColor:'white',
    border:'1px solid #CFB284',
    borderRadius:'15px',
    width:'90%',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
  }
  const imgStyle={
    width:'30%',
    borderRadius:'100px',
    maxWidth:'155px'
  }
  const renderItems= items.map((item,i)=>{
    return( <ScrollingItems height={props.height}  key={i}>
       <img src={require(`${item}`)} />
       <h3 style={{marginRight:'auto',marginLeft:'.5rem'}}>This is an item</h3>
       <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
       <Tag laptop={ifMobileorIfLoptop(false,true)}>
         100% cotton
       </Tag>
       <Price cutPrice={499}></Price>
       </div>
     </ScrollingItems>)
    });
  return (
    <>
      <Container style={style}>
     <img style={imgStyle} src={require('./img/DisplayPhoto.png')} />
      <span style={{marginRight:'auto',marginLeft:'1.5rem'}}>
        <div style={{fontSize:'1.5rem'}}>Name</div>
        <div style={{fontSizee:'1rem',fontFamily:'monospace',marginTop:'.7rem'}}>Mobile num:0000000000</div>
      </span>
      </Container>
      <Container style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundColor:'white',    border:'1px solid #CFB284',
    borderRadius:'15px', }}>
      <div style={{backgroundColor:'#FFFDD2',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}> 
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11075)"> <path d="M5.63606 18.3639C9.15077 21.8786 14.8493 21.8786 18.364 18.3639C21.8787 14.8492 21.8787 9.1507 18.364 5.63598C14.8493 2.12126 9.15077 2.12126 5.63606 5.63598C3.87757 7.39447 2.99889 9.6996 3.00002 12.0044L3 13.9999" stroke="#CFB284" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1 11.9999L3 13.9999L5 11.9999" stroke="#CFB284" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 7.99994L11 12.9999L16 12.9999" stroke="#CFB284" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11075"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
       <span>History</span>


      </div>
          <ScrollBar wrap={'wrap'}>
     {renderItems}
    </ScrollBar>


      </Container>

    </>
  )
}
