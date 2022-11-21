import React , {useEffect} from 'react';
import './main.css';
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi';
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Xosh Gelmishsiniz',
    location: 'Azerbaijan',
    grade: 'Cultural Relax',
    fees: '$400',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem a? Sit, consequuntur ipsum reiciendis quisquam itaque veritatis blanditiis id!'
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Buyurun Lutfen',
    location: 'Turkey',
    grade: 'Cultural Relax',
    fees: '$600',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem a? Sit, consequuntur ipsum reiciendis quisquam itaque veritatis blanditiis id!'
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Kakakiok',
    location: 'Georgio',
    grade: 'Cultural Relax',
    fees: '$200',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem a? Sit, consequuntur ipsum reiciendis quisquam itaque veritatis blanditiis id!'
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Kak Dela',
    location: 'Russia',
    grade: 'Cultural Relax',
    fees: '$1400',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem a? Sit, consequuntur ipsum reiciendis quisquam itaque veritatis blanditiis id!'
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Welcome!',
    location: 'Canada',
    grade: 'Cultural Relax',
    fees: '$1870',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem a? Sit, consequuntur ipsum reiciendis quisquam itaque veritatis blanditiis id!'
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Hi Guys',
    location: 'US',
    grade: 'Cultural Relax',
    fees: '$5000',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem a? Sit, consequuntur ipsum reiciendis quisquam itaque veritatis blanditiis id!'
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Do you want tea',
    location: 'England',
    grade: 'Cultural Relax',
    fees: '$6100',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem a? Sit, consequuntur ipsum reiciendis quisquam itaque veritatis blanditiis id!'
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Bello Cao',
    location: 'Spain',
    grade: 'Cultural Relax',
    fees: '$2000',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem a? Sit, consequuntur ipsum reiciendis quisquam itaque veritatis blanditiis id!'
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Love City',
    location: 'France',
    grade: 'Cultural Relax',
    fees: '$7000',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, exercitationem a? Sit, consequuntur ipsum reiciendis quisquam itaque veritatis blanditiis id!'
  }

]

const Main = () => {

  
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos='fade-right' className='title'>
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {

            return (
              <div data-aos='fade-up' key={id} className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className='destTitle'>
                    {destTitle}
                  </h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className='name'>{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    Details <HiOutlineClipboardCheck className='icon' />
                  </button>

                </div>
              </div>
            )

          })
        }
      </div>

    </section>
  )
}

export default Main