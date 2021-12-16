// images
import ZidWihteLogo from "assets/images/zid-logo-white.png";
import Up from "assets/images/up.png";
import Chatting from "assets/images/chat.png";
// icons
import TwitterIcon from "./icons/twitter-svg";
import InstaIcon from "./icons/insta-svg";
import LinkedIcon from "./icons/linkedin-svg";
import YoutubeIcon from "./icons/youtube-svg";

// styles
import "./Footer.component.scss";

const Footer = () => (
  <footer className="main-footer">
    <div className="container d-flex justify-content-center">
      <figure className="main-footer__services up">
        <img src={Chatting} alt="chatting" />
      </figure>
      <div>
        <figure>
          <img src={ZidWihteLogo} alt="zid-logo" />
        </figure>
        <div className="social-icons d-flex align-items-start justify-content-center">
          <div className="social-icon">
            <YoutubeIcon />
          </div>
          <div className="social-icon">
            <LinkedIcon />
          </div>
          <div className="social-icon">
            <InstaIcon />
          </div>
          <div className="social-icon">
            <TwitterIcon />
          </div>
        </div>
      </div>
      <figure className="main-footer__services chatting">
        <img src={Up} alt="chatting" />
      </figure>
    </div>
  </footer>
);
export default Footer;
