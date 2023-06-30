import './DestinationStyle.css'
import img1 from '../assets/DalLake1.jpg'
import img2 from '../assets/DalLake2.jpg'
import img3 from '../assets/temple1.jpg'  
import img4 from '../assets/temple2.jpg'

import DestinationData from './DestinationData'
export default function Destination(){
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tour give you the opportunity to a lot, within a time frame</p>
        < DestinationData
          direction='left-right'
          wrapper='container'
          descClass='desc'
          heading="Dal Lake, Srinagar India"
          content='Dal Lake is a picturesque lake located in the city of Srinagar, the summer capital of the Indian state of Jammu and Kashmir. The lake is a major tourist attraction and is famous for its serene beauty, magnificent scenery, and colorful houseboats. It is also known as the "Jewel in the crown of Kashmir" and is one of the most beautiful lakes in India.'
          imgClass='place-img'
          srcImg1={img1}
          srcImg2={img2}
          />
         < DestinationData
          direction='right-left' 
          wrapper='container'
          descClass='desc'
          heading="Kedarnath Temple Uttarakhand, India"
          content='Kedarnath Temple is a Hindu temple dedicated to Lord Shiva and is located in the Rudraprayag district of Uttarakhand, India. It is one of the four Chota Char Dham pilgrimage sites and is considered one of the holiest places for Hindus. The trek to Kedarnath is arduous, and the route is dotted with scenic beauty, making it a memorable experience for the pilgrims. The temple holds immense significance in the Hindu religion and is a symbol of faith, spirituality, and devotion. It is a must-visit destination for anyone seeking a spiritual journey in the lap of the Himalayas.'
          imgClass='place-img'
          srcImg1={img3}
          srcImg2={img4}
          />
      </div>
    </>
  )
}