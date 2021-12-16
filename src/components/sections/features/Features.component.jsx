import Button from "components/button/Button.component";
// icons
import ChatIcon from "./icons/chat-svg";
import HandIcon from "./icons/hand-svg";
import MailIcon from "./icons/mail-svg";
// images
import ZidAppImage from "assets/images/zidapp.png";
// style
import "./Features.component.scss";
import Figure from "components/figure/Figure.component";

const Features = () => (
  <section className="features">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="features__content">
            <header>
              <h3>كل ما تحتاجه لنمو متجرك في مكان واحد</h3>
              <p>
                مميزات سوق تطبيقات زد تساعدك في سهولة و سرعة الاستفادة من خدمات
                وحلول سوق التطبيقات لنمو متجرك و مضاعفة أرباحك
              </p>
            </header>
            <ul className="features__items">
              <li className="d-flex align-items-end">
                <div className="icon">
                  <MailIcon />
                </div>
                <p>سهولة أدارة وتفعيل تطبيقاتك من نفس لوحة تحكم متجرك</p>
              </li>
              <li className="d-flex align-items-end">
                <div className="icon">
                  <ChatIcon />
                </div>
                <p>دعم فني وتقني متكامل متوفر علي مدار الساعة</p>
              </li>
              <li className="d-flex align-items-end">
                <div className="icon">
                  <HandIcon />
                </div>
                <p>أسعار تنافسية مع تجربة مجانية و باقات أشتراك متنوعة</p>
              </li>
            </ul>
            <Button />
          </div>
        </div>
        <div className="col-lg-6">
          <Figure>
            <img
              className="main-img"
              src={ZidAppImage}
              alt="our-applications"
            />
          </Figure>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
