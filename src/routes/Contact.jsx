import Hero from '../Components/Hero'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Form from '../Components/ContactForm'
export default function Contact(props){
   let heroDetails={
      cName:' hero about-hero',
      source:'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title:'Contact',
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
      <Form/>
      <Footer/>
    </>)
}