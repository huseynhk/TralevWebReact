import React , {useEffect} from 'react';
import './footer.css';
import video2 from '../../Assets/video2.mp4';
import { FiSend, FiChevronRight } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';


import Aos from 'aos';
import 'aos/dist/aos.css';



const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (

    <section className='footer'>

      <div className="videoDiv">
        <video src={video2} muted autoPlay loop type="video/m4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">

          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos='fade-up' type="text" placeholder='Enter Your Email' />
            <button data-aos='fade-up' className='btn flex' type='submit'>
              Send <FiSend className='icon' />
            </button>
          </div>

        </div>

        <div className="footerCard flex">

          <div className="footerIntro flex">

            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon' />Travel</a>
            </div>

            <div data-aos='fade-up' className="footerText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Tenetur possimus excepturi amet vero inventore deserunt
              temporibus sint doloremque, pariatur magni.
            </div>

            <div data-aos='fade-up' className="footerSocials flex">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>


          </div>

          <div className="footerLinks grid">

            <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Insurance
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Agency
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Tourism
              </li>

              
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Payment
              </li>


            </div>

            <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Bookings
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Rentcars
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                HostelWord
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Trivago
              </li>

              
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>


            </div>

            <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Baku
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Istanbul
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                London
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                New York
              </li>

              
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Pekin
              </li>


            </div>

          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ISRATHEC 2022</small>
          </div>

        </div>

      </div>


    </section>

  )
}

export default Footer