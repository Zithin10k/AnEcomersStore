import React from 'react'
import { ScrollBar } from './styled/ScroolBar.styled'
import { ScrollingItems } from './styled/ScrollingItems.styled'
import Price from './Price';
import { Tag } from './styled/Tag.styled';
import { useMediaQuery } from 'react-responsive';



export default function ScrollList(props) {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 600 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 600 })
  const ifMobileorIfLoptop = (a, b) => {
    if (isTabletOrMobile) { console.log('mobile'); return a };
    if (isDesktopOrLaptop) console.log('laptop'); return b;
  }
  const items=['./img/item.jpeg','./img/item.jpeg','./img/item.jpeg','./img/item.jpeg','./img/item.jpeg','./img/item.jpeg','./img/item.jpeg','./img/item.jpeg','./img/item.jpeg','./img/item.jpeg',]
  const renderItems= items.map((item,i)=>{
   return( <ScrollingItems height={props.height}  key={i}>
      <img src={require(`${item}`)} />
      <h3 style={{marginRight:'auto',marginLeft:'.5rem'}}>This is an item</h3>
      <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
      <Tag laptop={ifMobileorIfLoptop(false,true)}>
        100% cotton
      </Tag>
      <Price cutPrice={499} orgPrice={549}></Price>
      </div>
    </ScrollingItems>)
   });
  return (
    <ScrollBar wrap={props.wrap}>
     {renderItems}
    </ScrollBar>
  )
}
