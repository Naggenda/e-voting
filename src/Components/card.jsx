import React from "react";
import Card from "@mui/material/Card";

const card = (props) => {
  const msg = props.msg;
  
  return (
    <div className="card-centre">
      {msg.map((msg)=>
      <Card sx={{ maxWidth: 345, padding: "40px" }}>
        <h2>{msg.title}</h2>
        <p>
          {msg.text}
        </p>
      </Card>
      )}
    </div>
  );
};

export default card;
