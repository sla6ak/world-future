import { Title } from 'components/Title/Title.styled';
import { ListAuth } from 'components/ListAuth/ListAuth.styled';
import { TextGame } from 'views/Home/Home.styled';
import { Typography, Grid } from '@mui/material/';
import { ButtonSelectLeft, NikName, ButtonSelectRight } from './SetLord.style';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { myNik } from 'redux/NikSlise';
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {
  useGetMyPersonQuery,
  useRegistrationPersonMutation,
} from 'server/personFetch';

const SetLord = () => {
  const [nikName, setNikName] = useState('');
  const dispatch = useDispatch();
  const { data: personAPI, error } = useGetMyPersonQuery();
  const [createPerson, { error: errorCreatePerson }] =
    useRegistrationPersonMutation();

  const handleNik = event => {
    setNikName(event.target.value);
  };

  //*******************проверим есть ли персонаж у игрока*********************************
  useEffect(() => {
    if (error) return;
    if (personAPI === undefined) {
      return;
    }
    dispatch(myNik(personAPI.data.nikName));
    toast.success(`Welcome ${personAPI.data.nikName}`);
  }, [personAPI, dispatch, error]);

  // **************** создадим нового персонажа в базе*************************************
  const clikRassa = async nameRassa => {
    const responsPerson = await createPerson({
      nikName: nikName,
      rassa: nameRassa,
    });
    if (errorCreatePerson) {
      return toast.error(`Can not created beacose${errorCreatePerson}`);
    }
    if (!responsPerson.data) {
      return;
    }
    dispatch(myNik(responsPerson.data.nikName));
    toast.success('Create new lord!');
  };

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
      </TextGame>
      {personAPI ? (
        <TextGame>
          Your nikName:Vova, welcome to back lord!
          <Navigate to="/play/blueHome" />
        </TextGame>
      ) : (
        <>
          <NikName
            label="nik Name"
            required
            type="text"
            name="nikName"
            value={nikName}
            onChange={handleNik}
          />
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
          <NavLink to="/play/blueHome">try game</NavLink>
        </>
      )}
    </ListAuth>
  );
};

export default SetLord;
