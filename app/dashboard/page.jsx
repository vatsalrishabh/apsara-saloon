import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer'
import DesktopWallet from './DesktopWallet'
import SmartPhoneWallet from './SmartPhoneWallet'


const page = () => {
  return (
    <>
<Navbar/>
    <div className="full z-0">
     

      <DesktopWallet/>
      {/* <SmartPhoneWallet/> */}
     
    </div>
 <Footer/>
    </>
  )
}

export default page
