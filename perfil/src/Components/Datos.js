import React, { useState } from "react";
import Dato from "./Dato";

const Datos = () => {
  const [datos, setDatos] = useState([
    {
      id: 1,
      name: "Samuel Alejandro Granados González",
      career: "Ingeniería en Ciencias de la Computación",
      img: "https://avatars.githubusercontent.com/u/67867979?v=4",
      skills: ".NET, PHP, DBMS"
    },
  ]);

  return (
    <div className="row">
      {datos.map((dato) => {
        return (
          <Dato
            key={dato.id}
            name={dato.name}
            img={dato.img}
            career={dato.career}
            skills={dato.skills}
          />
        );
      })}
    </div>
  );
};

export default Datos;