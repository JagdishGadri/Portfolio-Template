import "./educationList.css";
import Item from "../Item/Item";


const EducationList = () => {
  const educationData = [
    {
      title: "Coding",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration",
      id: 1,
    },

    {
      title: "Quality Assurance",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration",
      id: 2,
    },
    {
      title: "Customer Review",
      detail:
        " There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration",
      id: 3,
    },
  ];

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Education</h1>
      </div>
      <div className="pl-list">
        {educationData.map((item) => (
          <Item key={item.id} title={item.title} detail={item.detail} />
        ))}
      </div>
    </div>
  );
};

export default EducationList;
