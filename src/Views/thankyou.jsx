import React, { useState } from 'react';
import Card from '../Components/card';

const thankyou = () => {
  const [msg, setMsg] = useState([
    {title: "Thank You", text: "We are glad that you have been part of this voting session"},
  ]);

  return (
    <div>
      <Card msg={msg} />
    </div>
  )
}

export default thankyou;
