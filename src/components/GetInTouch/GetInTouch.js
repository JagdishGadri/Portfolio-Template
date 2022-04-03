import React from "react";
import "./getInTouch.css";
import Link from "../Link/Link";

function GetInTouch() {
  const links = [
    { id: 1, detail: "LinkedIn" },
    { id: 2, detail: "GitHub" },
    { id: 3, detail: "FaceBook" },
    {id:4,detail:"Instagram"},
  ];

  return (
    <div className="getInTouch">
      <div className="getInTouch-title">
        <h2>Get in touch</h2>
      </div>
      <div className="getInTouch-details">
        {links.map((link) => (
          <Link data={link.detail} key={link.id} />
        ))}
      </div>
    </div>
  );
}

export default GetInTouch;
