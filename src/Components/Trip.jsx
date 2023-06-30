import './TripStyle.css'
import TripData from './TripData'
import trip1 from '../assets/indonesia.jpg'
import trip2 from '../assets/dubai.jpg'
import trip3 from '../assets/italy.jpg'
export default function Trip() {
  return (
    <>
      <div className="trip">
        <h1>Recent Trip</h1>
        <p>You can discover unique destination using Google Maps.</p>
        <div className='tripcard'>
          <TripData
            img={trip1}
            heading='Trip of Indonesia'
            content="I recently returned from an incredible trip to Indonesia. I explored Bali's stunning rice terraces, learned traditional batik-making in Yogyakarta, and encountered the mighty Komodo dragon in Komodo National Park. The country's culture, food, and friendly locals made for an unforgettable experience. I highly recommend adding Indonesia to your travel bucket list."
          />
          <TripData
            img={trip2}
            heading='Trip of Dubai'
            content="Dubai is a city that offers a unique and extravagant travel experience. The city is known for its luxurious hotels, towering skyscrapers, and extravagant shopping malls, making it a popular destination for travelers seeking an indulgent vacation. The city also offers a range of activities such as desert safaris, theme parks, and water sports, as well as cultural experiences like visiting the Dubai Museum or exploring the historic Al Fahidi neighborhood."
          />
          <TripData
            img={trip3}
            heading='Trip of Italy'
            content="Italy is a country full of charm, history, and incredible beauty. From the stunning coastlines of the Amalfi Coast and Cinque Terre to the magnificent cities of Rome, Florence, and Venice, there is something for everyone in Italy. The country is also renowned for its delicious cuisine, fine wines, and fascinating culture and traditions."
          />
        </div>
      </div>

    </>
  )
}