import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useDispatch, useSelector } from "react-redux";
// import { useContext } from "react";
// import { ThemeContext } from "../../context";

const Toggle = () => {
  // const theme = useContext(ThemeContext);
  const dispatch = useDispatch()
  const darkMode = useSelector((state)=>state.darkMode)

  const handleClick = () => {
    dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
