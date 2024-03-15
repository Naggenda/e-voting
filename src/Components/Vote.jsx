import React, { useState } from "react";
import Radiobtn from "./Radiobtn";

const Vote = () => {
  const [candidates, setCandidates] = useState([
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
    <Radiobtn candidates={candidates} />
  </div>;
};
export default Vote;
