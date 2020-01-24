import React from "react";

const Card = props => {
  return (
    <div onClick={() => props.dispatch(props.item.title)} className="Card">
      <h1 className="Title">Title: {props.item.title}</h1>
      <h3>Episodes: {props.item.episodes}</h3>
      <h3>Score: {props.item.score}</h3>
    </div>
  );
};
export default Card;
