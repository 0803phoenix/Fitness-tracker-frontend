export default function HeroImage(props) {
    return (
        <div className="card text-white">
        <img className="card-img" src={props.src} alt="Card image" style={{filter:"brightness(50%)"}}/>
        <div className="card-img-overlay" style={
            {
                position: "absolute",
                top: "40%",
                left: "0",
                width: "100%",
            }
        }>
          <h5 className="card-title" style={{fontSize:"60px", fontWeight:"bold"}}>{props.title}</h5>
          <p className="card-text" style={{fontSize:"20px", fontWeight:"bold"}}>{props.text}</p>
        </div>
      </div>
    );
  }