import React, { useState } from "react";
import Radiobtn from "./Radiobtn";

const Vote = () => {
  const [candidate, setCandidate] = useState([
    {
      title: "PRESIDENTIAL CANDIDATES",
      values: [
        {
          name: "Naggenda Joshua",
        },
        {
          name: "Namubiru Maria Keirra",
        },
      ],
    },
    {
        title: "MINISTER CANDIDATES",
        values: [
          {
            name: "Naggenda Joshua",
          },
          {
            name: "Namubiru Maria Keirra",
          },
        ],
      },

  ]);
  return <div>
    <Radiobtn candidate = {candidate}/>
  </div>;
};

export default Vote;
