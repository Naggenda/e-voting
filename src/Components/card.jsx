import React from "react";
import Card from "@mui/material/Card";

const card = (title, text) => {
  return (
    <div className="card-centre">
      <Card sx={{ maxWidth: 345, padding: "40px" }}>
        <h2>Thank You</h2>
        <p>
          Note that the development build is not optimized. To create a
          production build
        </p>
      </Card>
    </div>
  );
};

export default card;
