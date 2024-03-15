import React from 'react';
import SideBar from '../../LayOut/sidebar';
// import Radiobtn from '../../Components/Radiobtn';
import Vote from '../../Components/Vote';

const index = () => {
  return (
    <div style={{display: 'flex'}}>
      <SideBar />
      <Vote />
    </div>
  )
}

export default index
