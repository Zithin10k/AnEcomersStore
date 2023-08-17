import React from 'react'
import Container from './styled/Container'
import { useMediaQuery } from 'react-responsive'

export default function Banner() {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 600 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 600 })

    const ifMobileorIfLoptop = (a, b) => {
      if (isTabletOrMobile) { console.log('mobile'); return a };
      if (isDesktopOrLaptop) console.log('laptop'); return b;
    }
    const imgStyle={
        display:'block',
         width:'98%',
         borderRadius:'.3rem',
         margin:'0 auto'

     }
  return (
    <>
    <Container>
        <img style={imgStyle} src={require(`./img/${ ifMobileorIfLoptop('mobileBanner.jpg','banner.webp')}`)}  />
    </Container>
    </>
  )
}
