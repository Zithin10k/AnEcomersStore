import React from 'react'
import { useMediaQuery } from 'react-responsive'
export default function Boxlist() {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 600 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 600 })

    const ifMobileorIfLoptop = (a, b) => {
      if (isTabletOrMobile) { console.log('mobile'); return a };
      if (isDesktopOrLaptop) console.log('laptop'); return b;
    }
  return (
    <div>
      
    </div>
  )
}
