import "./Circle.scss";

const Circle = (props) => {
  const circleStyle = {
    backgroundColor: props.color,
    left: props.left + "px",
    top: props.top + "px",
    transition: props.transition * 25 + "ms",
    transform: `scale(${props.scale})`,
  };
  return <div className="circle" style={circleStyle}></div>;
};

export default Circle;
