import "./intro.css";
import Me from "../../img/SmitProfile.jpeg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Smit Shah</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Business Analyst</div>
              <div className="i-title-item">User Story Teller</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc">
            I as a Business analyst help guide businesses in improving processes,
            products, services and software through data analysis. I am a agile
            worker who straddl// const theme = useContext(ThemeContext);e the line between IT and the business to help bridge
            the gap and improve efficiency
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
