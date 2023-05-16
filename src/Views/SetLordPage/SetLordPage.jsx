import { Title } from 'Components/Title/Title.styled'
import { ListAuth } from 'Components/ListAuth/ListAuth.styled'
import { TextGame } from 'Views/StartPage/StartPage.styled'
import { Typography, Grid } from '@mui/material/'
import { useMyLordInfoHook } from 'Hooks/useMyLordInfoHook'
import { allLordInfoAction } from 'Redux/Slices/lordInfoSlice'
import {
  ButtonSelectLeft,
  NikName,
  ButtonSelectRight
} from './SetLordPage.style'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { validationLordSchema } from 'Helpers/validationForms'
import { useNavigate } from 'react-router-dom'
import { useRegistrationPersonMutation } from 'Redux/ServerAPI/API_BASE_SERVER'

const SetLordPage = () => {
  const navigate = useNavigate()
  const [nikName, setNikName] = useState('')
  const dispatch = useDispatch()
  const { setLordPage } = useSelector((state) => state.language.transleter)
  useMyLordInfoHook()
  const { lordInfo } = useSelector((state) => state)
  const [createPerson] = useRegistrationPersonMutation()
  let responsPerson = null
  const handleNik = (event) => {
    setNikName(event.target.value)
  }

  //* ******************проверим есть ли персонаж у игрока*********************************
  useEffect(() => {
    if (!lordInfo) {
      return
    }
    toast.success(`Your lord: ${lordInfo.nikName}`)
    // navigate(`/play/${lordInfo.planet}`);
  }, [lordInfo, navigate])

  // **************** создадим нового персонажа в базе*************************************
  const clikRace = async (nameRace) => {
    const lordCandidat = {
      nikName,
      race: nameRace
    }
    try {
      await validationLordSchema.validate(lordCandidat)
    } catch (error) {
      toast.warn(`${error}`)
      return
    }
    try {
      responsPerson = await createPerson(lordCandidat)
      // responsPerson.data = { ...baseLord, nikName: nikName, rassa: rassa, user: req.id, planet: "", };
      if (responsPerson.data) {
        toast.success(`Create new lord ${responsPerson.data.nikName}!`)
        dispatch(allLordInfoAction(responsPerson.data))
      }
    } catch (error) {
      if (error) {
        console.log(error)
      }
    }
  }

  return (
    <ListAuth>
      <Title>{setLordPage ? setLordPage.h1 : 'Setting your personage'}</Title>
      <TextGame>
        <Typography>
          {setLordPage
            ? setLordPage.history
            : 'К 4800-му году человечество научилось использовать кротовые норы для перемещений по галактике, но как далеко бы не шел прогресс внутриние межусобицы и борьба за власть и ресурсы только усиливались, что в конце концов привело к полному расколу правления на две крупнейшие фракции, которые заняли критически важные для технологий источники ресурсов. Какую бы рассу ты не выбрал ты защищаешь мирных граждан от дисбаланс во вселенной!'}
        </Typography>
      </TextGame>
      {!lordInfo && (
        <>
          <h3>
            {setLordPage ? setLordPage.ask : 'Придумайте имя своему персонажу'}
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
              <ButtonSelectLeft onClick={() => clikRace('Blue')}>
                {setLordPage ? setLordPage.buttons.winter : 'Winter'}
              </ButtonSelectLeft>
            </Grid>
            <Grid item xs={6}>
              <ButtonSelectRight
                onClick={() => {
                  clikRace('Yellow')
                }}
              >
                {setLordPage ? setLordPage.buttons.desert : 'Desert'}
              </ButtonSelectRight>
            </Grid>
          </Grid>
        </>
      )}
    </ListAuth>
  )
}

export default SetLordPage
