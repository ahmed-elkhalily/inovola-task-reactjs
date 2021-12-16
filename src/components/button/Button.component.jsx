import "./Button.component.scss";
import Chevron from "assets/icons/chevron.png";
const Button = ({ trans }) => (
  <button
    className="btn main-btn"
    style={{ background: trans ? "transparent" : "var(--main-purble)" }}
  >
    <div>
      تصفح التطبيقات
      <img src={Chevron} alt="goto" />
    </div>
  </button>
);

export default Button;
