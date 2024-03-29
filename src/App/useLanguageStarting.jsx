import { useEffect } from 'react'
import { transleter } from 'Redux/Slices/LanguageSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useGetLanguageQuery } from 'Redux/ServerAPI/API_BASE_SERVER'

export const useLanguageStarting = () => {
  const { myLanguage } = useSelector((state) => state.language) // должно вернуть сохраненный в локалке язык либо англ
  const { data: textSiteInLeng, error: errorLang } =
    useGetLanguageQuery(myLanguage)

  const dispatch = useDispatch()
  // меняет текст сайта на выбранный язык
  useEffect(() => {
    if (errorLang) {
      return console.log(errorLang)
    }
    if (textSiteInLeng === undefined) {
      return
    }
    dispatch(transleter(textSiteInLeng))
  }, [myLanguage, textSiteInLeng, errorLang])

  return { myLanguage, textSiteInLeng }
}
