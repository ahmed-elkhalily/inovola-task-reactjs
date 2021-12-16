// sections
import Navbar from "components/layout/navbar/navbar.component";
import Hero from "components/sections/hero/Hero.component";
import Features from "components/sections/features/Features.component";
import UniqApps from "components/sections/uniq-apps/UniqApps.component";
import Footer from "components/layout/footer/Footer.component";
// main-style
import "../assets/styles/main.scss";
const MainPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Features />
      <UniqApps />
      <Footer />
    </>
  );
};

export default MainPage;
