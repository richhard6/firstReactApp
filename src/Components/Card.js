import "./../App.css";

const Card = (props) => {
  return (
    <div className="card">
      <div>{props.type}</div>
      <div>{props.number}</div>
      <img className={props.type} alt={props.type} src={props.img}></img>
    </div>
  );
};

export default Card;
