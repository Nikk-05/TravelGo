import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import Destination from '../Components/Destination'
import Trip from '../Components/Trip'
import Footer from '../Components/Footer'
export default function Home() {
  let heroDetails=
    {
      cName:'hero',
      source:"https://images.unsplash.com/photo-1489595672898-26572ba975a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
      title:'Your Journey Your Destination',
      description:'Choose your favourite destination.',
      url:'/',
      btnText:'Travel Plan',
      btnClass:'show'
    }
  return (
    <>
      < NavBar/>
      < Hero
        cName={heroDetails.cName}
        source={heroDetails.source}
        title={heroDetails.title}
        desc={heroDetails.description}
        url={heroDetails.url}
        urlText={heroDetails.btnText}
        btnCls={heroDetails.btnClass}
      /> 
      <Destination/>
      <Trip/>
      <Footer/>
      
    </>
  )
}