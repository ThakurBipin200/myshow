import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import Heading from "./Heading";
// import "./index.css";
// import "./style.css";
// import Forms from "./Forms";

function App() {
  return (
    <>
      <Heading />
      {Sdata.map((val, index) => {
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            links={val.links}
          />
        );
      })}
    </>
  );
}

export default App;
