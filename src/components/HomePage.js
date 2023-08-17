import React from 'react'
import Banner from './Banner'
import { useMediaQuery } from 'react-responsive'
import ScrollList from './ScrollList'
import Collections from './Collections'
export default function HomePage() {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 600 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 600 })

    const ifMobileorIfLoptop = (a, b) => {
      if (isTabletOrMobile) { console.log('mobile'); return a };
      if (isDesktopOrLaptop) console.log('laptop'); return b;
    }
  return (
    <>
      <Banner />
      <ScrollList height={'17rem'} wrap={ifMobileorIfLoptop('nowrap','wrap')}></ScrollList>
      <Collections></Collections>
      
    </>
  )
}
