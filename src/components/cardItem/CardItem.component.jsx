// images
import Kumra from "assets/images/kumra.png";
// icons
import StarIcon from "./Star-svg";
// style
import "./CardItem.component.scss";

const CardItem = () => {
  return (
    <div className="col-md-3">
      <div className="uniq-card d-flex">
        <figure className="uniq-card__img">
          <img src={Kumra} alt="kumra imgae" />
        </figure>
        <div>
          <header className="uniq-card__header align-items-center">
            <div className="d-flex">
              <h5>قمرة</h5>
              <div className="d-flex align-items-center">
                <StarIcon />
                <span className="uniq-card__number">5</span>
              </div>
            </div>
            <p className="uniq-card__developer">
              تطوير:
              <span className="name">عمر برهوم</span>
            </p>
          </header>
          <p className="uniq-card__content">
            نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل الذي
            يمكنك من رفع مبيعاتك
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
