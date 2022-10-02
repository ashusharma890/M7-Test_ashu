function Form(props){
    return(
     
     <div className="Email">{props.name}
     <form className="form">
        <input className="email" placeholder="YourEmail"></input>
        <button className="subscribe">Subscribe</button>
     </form>
     <p>lorem impsum dolor amit</p>
     </div>
    
    )
}
export default Form;