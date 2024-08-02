import React from 'react'
import './Home.css'
import image_1 from '../../assets/image_1.jpeg'
import image_2 from '../../assets/image_2.jpeg'
 import image_3 from '../../assets/image_3.jpeg'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import { useInView } from 'react-intersection-observer'
import Contact from '../Contact/Contact'
import About from '../About/About'


const Home = () => {
  const { ref: home1Ref, inView: home1InView } = useInView({ threshold: 0 })
  const { ref: home2Ref, inView: home2InView } = useInView({ threshold: 0 })
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
      <div className="homes" id="homes">
      <div className="home-1" ref={home1Ref}>
        <img src={image_1} alt="" />      
        <div className={`home1-info-content ${home1InView? 'slide-in-from-left' : ''}`}>
          <p><h1>Welcome to MediBargain!</h1>We understand that finding the right medicine can be a daunting task.
          That's why we've created a platform that makes it easy to discover the
          perfect medicine for your needs, and explore a range of alternatives to
          ensure you're making the best choice for your health.</p>
        </div>
      </div>
      <div className="home-2" ref={home2Ref}>
        <img src={image_2} alt="" />
        <div className={`how-it-works ${home2InView? 'slide-in-from-right' : ''}`}>
          <p><h1>How does it work?</h1>
          <ol>
            <li>Search for a medicine by name or category.</li>
            <li>Explore a range of alternatives and compare their features.</li>
            <li>Choose the medicine that's right for you and purchase it online or in-store.</li>
          </ol>
          Our platform is designed to be user-friendly and intuitive, so you can find the right medicine in no time. Plus, our team of experts is always available to answer any questions you may have and provide personalized recommendations.</p>
        </div>
      </div>
      <center>
      <div className='home-end' id='001'>   
          <p>Ready to find the right medicine for you? Start exploring our platform today and discover the perfect medicine for your needs!</p>
      </div>
      </center>
      
    </div>
      </div>
      
      <About/>
     <Contact/>

      
    </>
  )
}

export default Home