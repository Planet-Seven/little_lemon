function ReviewCard(props) {
    return(
        <div className="ReviewCard">
            <p>{props.rating}/5</p>
            <img src={props.image} alt="profile pic"/>
            <h3>{props.name}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default ReviewCard