function LastFooter(props){
    return(
             <>
              <div className="part-second">
            <span className="heading">{props.name}</span><br></br>
    
            <span className="link_parts">{props.link_one}</span><br></br>
            <span className="link_parts">{props.link_two}</span><br></br>
            <span className="link_parts">{props.link_three}</span><br></br>
            <span className="link_parts">{props.link_four}</span><br></br>
            </div>
        </>
    )
}
export default LastFooter;