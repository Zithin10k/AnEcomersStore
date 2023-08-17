import React from 'react'
import { CollectonItems, CollectionsBox } from './styled/Collections.styled'
export default function Collections() {

    const arr=['./img/type.webp','./img/type.webp','./img/type.webp','./img/type.webp']
    const renderTypes= arr.map((item,i)=>{
    
    return(

        <CollectonItems key={i} style={{zIndex:-1}}>
        <img src={require(`${item}`)}/>
        <div id="overlay">
          type
        </div>
        
        </CollectonItems>
    )
    
    })
  return (
    <CollectionsBox>
      {renderTypes}
    </CollectionsBox>
  )
}
