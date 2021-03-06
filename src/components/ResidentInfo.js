import React from "react"
import styles from "./Card.module.scss";

const Card = ({ results }) => {
    let display;
  
    if (results) {
        display = results.map((x) => {
            
            let { id, image, name, status, origin, episode } = x;
      
          return ( 
            <div
              key={id}
              className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
              <div
  className={`${styles.card} d-flex flex-column justify-content-center`}
>
  <img className={`${styles.img} img-fluid`} src={image} alt="" />
  <div className={`${styles.content}`}>
    <div className="fs-5 fw-bold mb-4">{name}</div>
    
    <div className="">
      <div className="fs-6 fw-normal">Status</div>
      <div className="fs-5">{status}</div>
      <div className="fs-6 fw-normal">Origin</div>
      <div className="fs-5">{origin.name}</div>
      <div className="fs-6 fw-normal">Episodes</div>
      <div className="fs-5">{episode.id}</div>
    </div>
  </div>
</div>

            </div>
        );
      });
      }
    else{
      display = "No Characters Found :/";
    }
  
    return <>{display}</>;
  }

  export default Card;