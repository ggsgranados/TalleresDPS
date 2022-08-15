import React from "react";

const Dato = (props) => {
  return (
    <div className="col-lg-4">
      <div className="text-center card-box">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto">
            <img
              src={props.img}
              className="rounded-circle img-thumbnail"
              alt="Profile"
            />
          </div>
          <div className="">
            <h4>{props.name}</h4>
            <p className="text-muted">{props.career}</p>
            <p className="text-muted">{props.skills}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dato;