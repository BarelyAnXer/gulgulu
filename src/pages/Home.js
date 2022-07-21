import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TextLogo from '../components/TextLogo'
import Search from '../components/Search'

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Header/>
      <TextLogo/>
      <Search/>
      <Footer/>

    </div>
  )
}

export default Home
