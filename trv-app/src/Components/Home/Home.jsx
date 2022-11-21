import React , {useEffect} from 'react';
import './home.css';
import video from '../../Assets/video1.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';

import Aos from 'aos';
import 'aos/dist/aos.css';



const Home = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/m4"></video>

      <div className="homeContent container">

        <div className="textDiv">
          <span data-aos='fade-up' className='smalltext'>
            Our Pacgaces
          </span>
          <h1 data-aos='fade-up' className='homeTitle'>
            Search your Holiday
          </h1>
        </div>

        <div data-aos='fade-up' className="cardDiv grid">

          <div className="desInput">
            <label htmlFor="city">
              Search Your Destination
            </label>
            <div className="input flex">
              <input type="text" placeholder='Enter Name Here...' />
              <GrLocation className='icon'/>
            </div>
          </div>

          
          <div className="dateInput">
            <label htmlFor="date">
              Select Date
            </label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          
          <div className="priceInput">
          <div className="label_total flex">
            <label htmlFor="price">Max Price:</label>
            <h3 className='total'>$7000</h3>
          </div>
          <div className="input flex">
              <input type="range" max='7000' min='250'/>
            </div>
          </div>

        <div className="searchOptions flex">
          <HiFilter className='icon'/>
          <span>More Filters</span>
        </div>

        </div>

        <div data-aos='fade-up' className="homeFooterIcon flex">

          <div className="rightIcon">
         <FiFacebook className='icon'/>
         <AiOutlineInstagram className='icon'/>
         <FaTripadvisor className='icon'/>
          </div>

          <div className="leftIcon">
         <BsListTask className='icon'/>
         <TbApps className='icon'/>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Home