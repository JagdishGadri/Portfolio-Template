import "./about.css";
import sun from "../../img/sun.png";
import about from "../../img/index.svg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={about}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         I am an experienced BA with experience of 1.5 days.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
          <img src={sun} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Here is a quoto I follow about nature.</h4>
            <p className="a-award-desc">
            I've found that there is always some beauty left - in Nature, sunshine, freedom, in yourself; these can all help you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
