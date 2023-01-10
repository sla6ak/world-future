import {
  RiteHelmet,
  Title,
  IconRobo,
  SumInfo,
  SumNamber,
  MainInfoBox,
  MainInfo,
  HelpInfo,
  Del,
} from './Squad.styled';
import aaa from './aaa.png';
import bbb from './bbb.png';
import ccc from './ccc.png';

const Squad = ({ lordInfo }) => {
  const { robot, shturm, sniper } = lordInfo?.data.squad;

  const resultSum = (unit, type) => {
    const sum =
      unit.power[type].base +
      unit.power[type].bonuse +
      Math.floor(
        (unit.power[type].shell.base + unit.power[type].shell.bonuse) *
          (unit.power[type].shell.percent / 100)
      );
    return sum;
  };
  return (
    <RiteHelmet
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Title>My squad:</Title>
      <div>
        <MainInfoBox>
          <MainInfo>
            <div>{robot?.name}</div>
            <SumInfo>
              Attack:<SumNamber>{resultSum(robot, 'attack')}</SumNamber>
            </SumInfo>
            <SumInfo>
              Defend:<SumNamber>{resultSum(robot, 'defend')}</SumNamber>
            </SumInfo>
            <SumInfo>
              Life:<SumNamber>{resultSum(robot, 'life')}</SumNamber>
            </SumInfo>
          </MainInfo>
          <IconRobo src={aaa} />
        </MainInfoBox>
        <HelpInfo>
          <div>
            <>Attack</>
            <div>skelet:{robot?.power.attack.base}</div>
            <div>amplifier:{robot?.power.attack.bonuse}</div>
            <div>shell:{robot?.power.attack.shell.base}</div>
            <div>bonuse{robot?.power.attack.shell.bonuse}</div>
            <div>percent{robot?.power.attack.shell.percent}</div>
          </div>
          <Del />
          <div>
            <>Defend</>
            <div>skelet:{robot?.power.defend.base}</div>
            <div>amplifier:{robot?.power.defend.bonuse}</div>
            <div>shell:{robot?.power.defend.shell.base}</div>
            <div>bonuse{robot?.power.defend.shell.bonuse}</div>
            <div>percent{robot?.power.defend.shell.percent}</div>
          </div>
          <Del />
          <div>
            <>Life</>
            <div>skelet:{robot?.power.life.base}</div>
            <div>amplifier:{robot?.power.life.bonuse}</div>
            <div>shell:{robot?.power.life.shell.base}</div>
            <div>bonuse{robot?.power.life.shell.bonuse}</div>
            <div>percent{robot?.power.life.shell.percent}</div>
          </div>
        </HelpInfo>
      </div>
      <div>
        <MainInfoBox>
          <MainInfo>
            <div>{shturm?.name}</div>
            <SumInfo>
              Attack:<SumNamber>{resultSum(shturm, 'attack')}</SumNamber>
            </SumInfo>
            <SumInfo>
              Defend:<SumNamber>{resultSum(shturm, 'defend')}</SumNamber>
            </SumInfo>
            <SumInfo>
              Life:<SumNamber>{resultSum(shturm, 'life')}</SumNamber>
            </SumInfo>
          </MainInfo>
          <IconRobo src={bbb} />
        </MainInfoBox>
        <HelpInfo>
          <div>
            <>Attack</>
            <div>skelet:{shturm?.power.attack.base}</div>
            <div>amplifier:{shturm?.power.attack.bonuse}</div>
            <div>shell:{shturm?.power.attack.shell.base}</div>
            <div>bonuse{shturm?.power.attack.shell.bonuse}</div>
            <div>percent{shturm?.power.attack.shell.percent}</div>
          </div>
          <Del />
          <div>
            <>Defend</>
            <div>skelet:{shturm?.power.defend.base}</div>
            <div>amplifier:{shturm?.power.defend.bonuse}</div>
            <div>shell:{shturm?.power.defend.shell.base}</div>
            <div>bonuse{shturm?.power.defend.shell.bonuse}</div>
            <div>percent{shturm?.power.defend.shell.percent}</div>
          </div>
          <Del />
          <div>
            <>Life</>
            <div>skelet:{shturm.power.life.base}</div>
            <div>amplifier:{shturm.power.life.bonuse}</div>
            <div>shell:{shturm.power.life.shell.base}</div>
            <div>bonuse{shturm.power.life.shell.bonuse}</div>
            <div>percent{shturm.power.life.shell.percent}</div>
          </div>
        </HelpInfo>
      </div>
      <div>
        <MainInfoBox>
          <MainInfo>
            <div>{sniper?.name}</div>
            <SumInfo>
              Attack:<SumNamber>{resultSum(sniper, 'attack')}</SumNamber>
            </SumInfo>
            <SumInfo>
              Defend:<SumNamber>{resultSum(sniper, 'defend')}</SumNamber>
            </SumInfo>
            <SumInfo>
              Life:<SumNamber>{resultSum(sniper, 'life')}</SumNamber>
            </SumInfo>
          </MainInfo>
          <IconRobo src={ccc} />
        </MainInfoBox>
        <HelpInfo>
          <div>
            <>Attack</>
            <div>skelet:{sniper.power.attack.base}</div>
            <div>amplifier:{sniper.power.attack.bonuse}</div>
            <div>shell:{sniper.power.attack.shell.base}</div>
            <div>bonuse{sniper.power.attack.shell.bonuse}</div>
            <div>percent{sniper.power.attack.shell.percent}</div>
          </div>
          <Del />
          <div>
            <>Defend</>
            <div>skelet:{sniper.power.defend.base}</div>
            <div>amplifier:{sniper.power.defend.bonuse}</div>
            <div>shell:{sniper.power.defend.shell.base}</div>
            <div>bonuse{sniper.power.defend.shell.bonuse}</div>
            <div>percent{sniper.power.defend.shell.percent}</div>
          </div>
          <Del />
          <div>
            <>Life</>
            <div>skelet:{sniper.power.life.base}</div>
            <div>amplifier:{sniper.power.life.bonuse}</div>
            <div>shell:{sniper.power.life.shell.base}</div>
            <div>bonuse{sniper.power.life.shell.bonuse}</div>
            <div>percent{sniper.power.life.shell.percent}</div>
          </div>
        </HelpInfo>
      </div>
    </RiteHelmet>
  );
};

export default Squad;
