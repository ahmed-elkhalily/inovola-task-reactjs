import Button from "../../button/Button.component";
import IntroImage from "../../../assets/images/Intro.png";
import Figure from "components/figure/Figure.component";
// style
import "./Hero.component.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <header className="hero__header text-center">
          <h2>طور متجرك ووسع افاق تجارتك مع سوق تطبيقات زد</h2>
          <p>
            طور تجارتك من خلال تطبيقات و حلول زد التي تساعدك
            <br />
            في نمو أرباحك عبر إدارة عمليات متجرك بشكل فعال وأحترافي
          </p>
          <Button />
        </header>
        <section className="hero__show">
          <Figure>
            <img className="main-img" src={IntroImage} alt="our-applications" />
          </Figure>
        </section>
      </div>
    </section>
  );
};

export default Hero;
