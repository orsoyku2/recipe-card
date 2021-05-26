import React from "react";
import "./Card.css";
import food from "../../assets/pizza.jpg"; // Tell webpack this JS file uses this image
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card({title,author,description,date,liked,setLike,likeCount}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{title}</h5>
          <div className="card-date">{date}</div>
        </div>
      </div>
      <img className="card-image" src={food} alt="Logo" />
      <div className="card-text">{description}</div>
      <div className="card-like-bar">
        {liked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo"  role="button"   onClick={setLike}/>
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" onClick={setLike}/>
        )}
        <div className="like-text">
          <b>{likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}
