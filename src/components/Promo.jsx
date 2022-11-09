import React from "react";
import Video from "../img/Federer.mp4"

const Promo = () => {
    return(
        <>
          <div className="col-12 promo-img">
            <div className="container-fluid">
                <h1 className="heading-h1"> It is really true that “every Rolex has a story to tell”, and this with Roger Federer is the ensuing chronicle of a great success</h1>
                <video className="container-fluid" controls autoPlay="on" src={Video} type="video/mp4" />
            </div>
          </div>
        </>
    )
}

export default Promo;