import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card({ item }) {


// Function to format the price based on the type of post
const formatPrice = () => {
  if (item.type === "rent") {
    return item.price >= 1000 ? (item.price / 1000).toFixed(1) + "k/month" : item.price + "/month";
  } else {
     // For buy type
  if (item.price >= 10000000) {
    // If price is 1 crore or more
    return (item.price / 10000000).toFixed(2) + " Cr";
  } else {
    // If price is less than 1 crore (in lakhs)
    return (item.price / 100000).toFixed(2) + " lakh";
  }
  }
};

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>      
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price"> {formatPrice()}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div  className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

