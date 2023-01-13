import { RiteHelmet, FormSubmit, Title, ButtonLetter } from './Missions.styled';
import { useState, useEffect } from 'react';

const Missions = ({ lordInfo }) => {
  const [buttonDis, setButtonDis] = useState(false);
  // заглушка
  const myMissions = null;

  useEffect(() => {
    if (1 === 3) {
      setButtonDis();
    }
  }, []);

  return (
    <RiteHelmet
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Title>My Missions:</Title>
      <div>
        {myMissions?.missions.map(el => {
          return (
            <div key={el._id}>
              <div>Quest:{el.bodyMission}</div>
              <div>Prize:{el.prize}</div>
              <div>{el.date}</div>
            </div>
          );
        })}
      </div>
      <FormSubmit>
        <ButtonLetter disabled={buttonDis}>Get new mission</ButtonLetter>
      </FormSubmit>
    </RiteHelmet>
  );
};

export default Missions;
