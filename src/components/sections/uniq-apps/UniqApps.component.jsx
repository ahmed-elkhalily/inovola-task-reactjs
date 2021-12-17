// components
import CardItem from "components/cardItem/CardItem.component";
import Button from "components/button/Button.component";
// style
import "./UniqApps.component.scss";

const UniqApps = () => {
  return (
    <section className="uniq-app">
      <div className="container">
        <header className="text-center uniq-app__main-header">
          <h3>التطبيقات المميزة</h3>
          <p>تطبيقات تقدم حلول وخدمات مميزة نوصي بتجربتها</p>
        </header>
        <div className="row">
          {[...Array(4)].map((item, i) => (
            <CardItem key={i} />
          ))}
        </div>
        <div className="text-center uniq-app__btn">
          <Button trans />
        </div>
      </div>
    </section>
  );
};

export default UniqApps;
