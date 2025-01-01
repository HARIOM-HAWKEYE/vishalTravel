import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { NavComponent } from '../component/navbar/navbar.jsx'
import { MainContent } from '../component/main-page/MainContent.jsx'
import { Milestone } from '../component/countingboxes/milestone.jsx'
import { BestLocation } from '../component/locations/locations.jsx'
import { Benefit } from '../component/benefit/benefit.jsx'
import { Carousel } from '../component/carousel/carousel.jsx'
function App() {
  const [count, setCount] = useState(0)
 const Slides =[{image:"https://uttarakhandtourism.gov.in/sites/default/files/2022-05/Banner_Kartik_Swami_Temple.jpeg"},{image:"https://media.istockphoto.com/id/484389570/photo/himalayas.jpg?s=612x612&w=0&k=20&c=6jM32XJBWlvv6x7AF-av52jlncPkz5hn_AEhjaDSFYI="},{image:"https://media.istockphoto.com/id/484389570/photo/himalayas.jpg?s=612x612&w=0&k=20&c=6jM32XJBWlvv6x7AF-av52jlncPkz5hn_AEhjaDSFYI="},
{image:"https://media.istockphoto.com/id/484389570/photo/himalayas.jpg?s=612x612&w=0&k=20&c=6jM32XJBWlvv6x7AF-av52jlncPkz5hn_AEhjaDSFYI="},{image:"https://media.istockphoto.com/id/484389570/photo/himalayas.jpg?s=612x612&w=0&k=20&c=6jM32XJBWlvv6x7AF-av52jlncPkz5hn_AEhjaDSFYI="}, ]

 return (
    <>
      <div className='main-page'>
        <div id='content'>
        <NavComponent></NavComponent>
        <MainContent></MainContent>
       
        </div>
      
      </div>
      <Milestone></Milestone>
      <BestLocation></BestLocation>
      <Benefit></Benefit>
      <Carousel slides={Slides}></Carousel>
    </>
  )
}

export default App
