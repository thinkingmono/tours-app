import { useState } from "react";

const Tour = ({ id, image, info, name, price, deleteTour }) => {
  const [showInfo, setShowInfo] = useState(false);
  const newInfo = info.slice(0, 250);
  return (
    <>
      <li>
        <img src={image} alt={name} className="img" />
        <div className="tour-info">
          <h5>{name}</h5>
          {showInfo ? <p>{info} <button type="button" className="info-btn" onClick={() => setShowInfo(!showInfo)}>read less</button></p> : <p>{newInfo}... <button type="button" className="info-btn" onClick={() => setShowInfo(!showInfo)}>read more</button></p>}
          <p className="tour-price">${price}</p>
        </div>
        <button type="button" onClick={() => deleteTour(id)} className="delete-btn">Delete</button>
      </li>
    </>
  )
}

export default Tour