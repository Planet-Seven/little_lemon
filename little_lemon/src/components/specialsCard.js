function SpecialsCard(props){
    return(
        <div className="SpecialsCard" backgroundColor="white">
            <img src={props.image} alt={props.title}/>
            <div className="description">
                <h3>{props.title}</h3>
                <p>{props.price}</p>
                <p>{props.description}</p>
            </div>
            <a href="order">Order a delivery</a>
        </div>
    );
}

export default SpecialsCard