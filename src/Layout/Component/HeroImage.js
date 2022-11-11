export default function HeroImage(props) {
    return (
        <div class="card text-white">
        <img class="card-img" src={props.src} alt="Card image" style={{filter:"brightness(50%)"}}/>
        <div class="card-img-overlay" style={
            {
                position: "absolute",
                top: "40%",
                left: "0",
                width: "100%",
            }
        }>
          <h5 class="card-title" style={{fontSize:"60px", fontWeight:"bold"}}>{props.title}</h5>
          <p class="card-text" style={{fontSize:"20px", fontWeight:"bold"}}>{props.text}</p>
        </div>
      </div>
    );
  }