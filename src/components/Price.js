import React from 'react'
import { PriceStyled } from './styled/Price.styled'
export default function Price(props) {
  return (
    <PriceStyled>
        	&#8377;{props.cutPrice}
     {props.orgPrice&& <span>
      &#x20B9; {props.orgPrice}
      </span>}

    </PriceStyled>
  )
}
