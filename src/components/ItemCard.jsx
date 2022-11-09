import React from "react";
import { useCart } from "react-use-cart";

const ItemCard = (props) => {
  const { addItem } = useCart();

    return(
        <div className="col-12 col-md-6 col-lg-3 full-card">
         <div className="card d-flex h-100 shadow">
          <img className="card-img-top cardImg" src={props.img} alt={props.title} title={props.title}/>
            <div className="card-body b-card">
              <h5 className="card-title">{props.model}</h5>
              <h5 className="card-title card-price">${props.price}</h5>
              <p className="card-text">{props.description}</p>
              <button className="btn btn-warning" 
               onClick = {()=> addItem(props.item)}>Add to Cart</button>
           </div>
      </div>
      </div>    
    )
}
export default ItemCard;