import { useState } from "react";

const Tour = ({ id, image, info, name, price, deleteTour }) => {
  const [showInfo, setShowInfo] = useState(false);
  const newInfo = info.slice(0, 250);
  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} className="img" />
        <span className="tour-price">${price}</span>
        <div className="tour-info">
          <h5>{name}</h5>
          {/* {showInfo ? <p>{info} <button type="button" className="info-btn" onClick={() => setShowInfo(!showInfo)}>show less</button></p> : <p>{newInfo}... <button type="button" className="info-btn" onClick={() => setShowInfo(!showInfo)}>read more</button></p>} */}
          <p>{showInfo ? info : `${newInfo}... `}
            <button type="button" className="info-btn" onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'show less' : 'read more'}</button></p>
          <button type="button" onClick={() => deleteTour(id)} className="btn btn-block delete-btn">Delete</button>
        </div>
      </article>
    </>
  )
}

export default Tour