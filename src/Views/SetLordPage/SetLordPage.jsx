import { Title } from 'Components/Title/Title.styled';
import { ListAuth } from 'Components/ListAuth/ListAuth.styled';
import { TextGame } from 'Views/StartPage/StartPage.styled';
import { Typography, Grid } from '@mui/material/';
import {
  ButtonSelectLeft,
  NikName,
  ButtonSelectRight,
} from './SetLordPage.style';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { myNik } from 'Redux/Slises/NikSlise';
import { Navigate } from 'react-router-dom';
import { validationLordSchema } from 'Helpers/validationForms';
import { useNavigate } from 'react-router-dom';
import {
  useGetMyPersonQuery,
  useRegistrationPersonMutation,
} from 'Redux/ServerAPI/API_BASE_SERVER';

const SetLordPage = () => {
  let navigate = useNavigate();
  const [nikName, setNikName] = useState('');
  const dispatch = useDispatch();
  const { setLordPage } = useSelector(state => state.language.transleter);
  const { data: lordInfo, error } = useGetMyPersonQuery();
  const [createPerson, { isSuccess }] = useRegistrationPersonMutation();
  let responsPerson = null;
  const handleNik = event => {
    setNikName(event.target.value);
  };

  //*******************проверим есть ли персонаж у игрока*********************************
  useEffect(() => {
    if (error) return;
    if (lordInfo === undefined) {
      return;
    }
    dispatch(myNik(lordInfo.data.nikName));
    toast.success(`Your lord: ${lordInfo.data.nikName}`);
  }, [lordInfo, dispatch, error]);

  // **************** создадим нового персонажа в базе*************************************
  const clikRassa = async nameRassa => {
    const lordCandidat = {
      nikName: nikName,
      rassa: nameRassa,
    };
    try {
      await validationLordSchema.validate(lordCandidat);
    } catch (error) {
      toast.warn(`${error}`);
      return;
    }
    try {
      responsPerson = await createPerson(lordCandidat);
      dispatch(myNik(responsPerson.data.newLord.nikName));
      toast.success(`Create new lord ${responsPerson.data.newLord.nikName}!`);
      if (responsPerson.data.newLord.planet === 'BlueHome') {
        navigate('/play/blueHome', { replace: true });
      } else if (responsPerson.data.newLord.planet === 'YellowHome') {
        navigate('/play/yellowHome', { replace: true });
      }
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
    return console.log(isSuccess);
  };

  return (
    <ListAuth>
      <Title>{!!setLordPage ? setLordPage.h1 : 'Setting your personage'}</Title>
      <TextGame>
        <Typography>
          {!!setLordPage
            ? setLordPage.history
            : 'К 4800-му году человечество научилось использовать кротовые норы для перемещений по галактике, но как далеко бы не шел прогресс внутриние межусобицы и борьба за власть и ресурсы только усиливались, что в конце концов привело к полному расколу правления на две крупнейшие фракции, которые заняли критически важные для технологий источники ресурсов. Какую бы рассу ты не выбрал ты защищаешь мирных граждан от дисбаланс во вселенной!'}
        </Typography>
      </TextGame>
      {!lordInfo ? (
        <>
          <h3>
            {!!setLordPage
              ? setLordPage.ask
              : 'Придумайте имя своему персонажу'}
          </h3>
          <NikName
            label="nik Name"
            variant="filled"
            required
            type="text"
            name="nikName"
            value={nikName}
            onChange={handleNik}
          />
          <Grid container spacing={2} sx={{ mb: '30px' }}>
            <Grid item xs={6}>
              <ButtonSelectLeft onClick={() => clikRassa('Blue')}>
                {!!setLordPage ? setLordPage.buttons.winter : 'Winter'}
              </ButtonSelectLeft>
            </Grid>
            <Grid item xs={6}>
              <ButtonSelectRight
                onClick={() => {
                  clikRassa('Yellow');
                }}
              >
                {!!setLordPage ? setLordPage.buttons.desert : 'Desert'}
              </ButtonSelectRight>
            </Grid>
          </Grid>
        </>
      ) : (
        <>{to(lordInfo)}</>
      )}
    </ListAuth>
  );
};

export default SetLordPage;

function to(lordAPI) {
  if (lordAPI?.data.planet === 'BlueHome') {
    return <Navigate to="/play/BlueHome" />;
  } else if (lordAPI?.data.planet === 'YellowHome') {
    return <Navigate to="/play/YellowHome" />;
  }
}
