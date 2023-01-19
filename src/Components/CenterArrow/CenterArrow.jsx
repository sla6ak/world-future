import React from 'react';
import { CenterArr } from './CenterArrow.styled';
import centreGoal from './centreGoal.png';

const CenterArrow = () => {
  return (
    <CenterArr>
      <img src={centreGoal} style={{ opacity: 0.5 }} alt="" />
      {/* <span id="arrow">X</span> */}
    </CenterArr>
  );
};
export default CenterArrow;
