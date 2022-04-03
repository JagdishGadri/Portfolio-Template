import "./projectList.css";
import Item from "../Item/Item";

const ProjectList = () => {
  const projectData = [
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
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc"></p>
      </div>
      <div className="pl-list">
        {projectData.map((item) => (
          <Item title={item.title} detail={item.detail} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
