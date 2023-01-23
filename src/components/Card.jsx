function Card(props) 
{
    const cardStyle = {
        backgroundColor: "#FFFFFF33", 
        color: "snow", 
        width: "fit-content", 
        height: "fit-content",
        margin: "3px 5px",
        fontWeight: "400",
        borderRadius: "5px",
        padding: ".3rem .35rem",
        transition: "500ms",
        cursor: "pointer"
    };



    return (
        <div className="suggestion_card" style={cardStyle} onClick={props.clickHandler}> {props.text} </div>
    );

}

export default Card;