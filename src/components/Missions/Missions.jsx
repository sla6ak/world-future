import { RiteHelmet, FormSubmit, Title, ButtonLetter } from './Missions.styled';
import { useState } from 'react';
import { useGetPandingMissionsQuery } from 'server/missionFeth';

const Missions = ({ lordInfo }) => {
  const [buttonDis, setButtonDis] = useState(false);
  const { data: myMissions } = useGetPandingMissionsQuery();

  return (
    <RiteHelmet
      onClick={e => {
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
