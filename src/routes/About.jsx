import Hero from '../Components/Hero'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Content from '../Components/ContentAbout'
export default function About(props){
   let heroDetails={
      cName:' hero about-hero',
      source:"https://images.unsplash.com/photo-1516384315388-90f7b1d0302c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title:'About',
      description:'',
      url:'',
      btnText:'',
      btnClass:'hide'
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
      <Content/>
      <Footer/>
    </>)
}