import "./Figure.component.scss";
// images
import YellowEllipse from "assets/images/yellow-ellipse.png";
import DottedPattern from "assets/images/Dot-Pattern.png";
const Figure = ({ children }) => {
  return (
    <figure className="fig d-flex justify-content-center container">
      {children}
      <img
        className="dot-pattern"
        src={DottedPattern}
        alt="applications-pattern"
      />
      <img className="ellipse" src={YellowEllipse} alt="applications-pattern" />
    </figure>
  );
};

export default Figure;
