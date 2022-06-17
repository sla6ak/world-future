import { Title } from 'components/Title/Title.styled';
import { ListAuth } from 'components/ListAuth/ListAuth.styled';
import { TextGame } from 'views/Home/Home.styled';
import { Typography, Grid } from '@mui/material/';
import { ButtonSelectLeft, NikName, ButtonSelectRight } from './SetLord.style';
import { useState } from 'react';

const SetLord = () => {
  const [nikName, setNikName] = useState('');
  const handleNik = () => {
    setNikName();
  };

  const clikRassa = nameRassa => {};
  return (
    <ListAuth>
      <Title>Setting your personage</Title>
      <TextGame>
        <Typography>
          К 4800-му году человечество научилось использовать кротовые норы для
          перемещений по галактике, но как далеко бы не шел прогресс внутриние
          межусобицы и борьба за власть и ресурсы только усиливались, что в
          конце концов привело к полному расколу правления на две крупнейшие
          фракции, которые заняли критически важные для технологий источники
          ресурсов. Какую бы рассу ты не выбрал ты защищаешь мирных граждан от
          специальных военных операций по истощению вашей земли! Не допусти
          дисбаланс во вселенной!
        </Typography>
        <NikName
          label="nik Name"
          required
          type="text"
          name="nikName"
          value={nikName}
          onChange={handleNik}
        />
      </TextGame>

      <Grid container spacing={2} sx={{ mb: '30px' }}>
        <Grid item xs={6}>
          <ButtonSelectLeft onClick={() => clikRassa('left')}>
            Left
          </ButtonSelectLeft>
        </Grid>
        <Grid item xs={6}>
          <ButtonSelectRight
            onClick={() => {
              clikRassa('right');
            }}
          >
            Right
          </ButtonSelectRight>
        </Grid>
      </Grid>
    </ListAuth>
  );
};

export default SetLord;
