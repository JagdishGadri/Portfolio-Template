import "./item.css";

const Item = ({ title, detail }) => {
  return (
    <div className="e">
      <div className="e-browser">
        <div className="e-circle"></div>
        <div className="e-circle"></div>
        <div className="e-circle"></div>
      </div>
      <p
        className="item-title"
        style={{
          fontSize: "2rem",

          fontWeight: "400",

          borderBottom: "1px solid grey",
        }}
      >
        {title}
      </p>

      <p className="item-detail">{detail}</p>
    </div>
  );
};

export default Item;
