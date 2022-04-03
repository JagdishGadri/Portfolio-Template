import "./experienceList.css";
import Item from "../Item/Item";

const ProductList = () => {
  const productData = [
    {
      title: "Coding",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration",
        id:1
    },

    {title: "Quality Assurance",
    detail:
      " There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration",
      id:2},
    {title: "Customer Review",
    detail:
      " There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration",
      id:3},
  ];
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Experience</h1>
        <p className="pl-desc">
        </p>
      </div>
      <div className="pl-list">
        {productData.map((item) => (
          <Item key={item.id} title={item.title} detail={item.detail} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
