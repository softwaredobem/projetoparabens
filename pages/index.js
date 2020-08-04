import React from 'react'
import Header from '../components/Header'

const Index = () => {
  return (
    <div className='container mx-auto'>
      <Header />
      <div className='bg-gray-500' style={{backgroundImage: 'url(\'/home.jpg\')', height: '372px'}}>
        <p className='text-white shadow text-5xl text-center'>
          <span className='inline-block p-2 bg-black bg-opacity-50'>Unimos corações generosos<br />numa rede do bem!</span></p>
      </div>
    </div>
  )
}
export default Index
