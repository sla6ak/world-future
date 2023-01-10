import {
  LeftHelmet,
  FormSubmit,
  Title,
  FormTextField,
  ButtonLetter,
  BodyLetter,
  LetterBox,
} from './Chat.styled';
import { useGetAllChatQuery } from 'Redux/Server/chatFetch';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useCreateMassageMutation } from 'Redux/Server/chatFetch';
import { validationLetterSchema } from 'Helpers/validationForms';

const Chat = ({ lordInfo }) => {
  const [buttonDis, setButtonDis] = useState(false);
  const { data: allChat } = useGetAllChatQuery(true, {
    pollingInterval: 3000,
  });
  const [letter, setLetter] = useState('');
  const [createNewMassage] = useCreateMassageMutation();
  const handleLetter = event => {
    setLetter(event.target.value);
  };

  const onSubmitLetter = async event => {
    event.preventDefault();
    try {
      const send = {
        autor: lordInfo?.data.nikName,
        massage: letter,
        rassa: lordInfo?.data.rassa,
      };
      await validationLetterSchema.validate(send);
      setButtonDis(true);
      setTimeout(() => {
        setButtonDis(false);
      }, 30 * 1000);
      setLetter('');
      await createNewMassage(send);
    } catch (error) {
      toast.warn(`${error}`);
      return;
    }
  };

  return (
    <LeftHelmet
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Title>Chat Game:</Title>
      <div>
        {allChat?.letters.map((el, index, arr) => {
          if (index <= arr.length - 15) return null;
          return (
            <LetterBox key={el._id}>
              <span
                style={{
                  color: el.rassa === 'Yellow' ? '#bfcf2e' : '#0b5dbb',
                  fontSize: '14px',
                  fontWeight: '800',
                }}
              >
                {el.autor}:
              </span>
              <BodyLetter>{el.massage}</BodyLetter>
              {/* <div>{el.date}</div> */}
            </LetterBox>
          );
        })}
      </div>
      <FormSubmit onSubmit={onSubmitLetter}>
        <FormTextField
          label="letter"
          required
          fullWidth
          type="text"
          name="letter"
          value={letter}
          onChange={handleLetter}
        />
        <div>You can send one letter of 30 sec</div>
        <ButtonLetter type="submit" disabled={buttonDis}>
          Send
        </ButtonLetter>
      </FormSubmit>
    </LeftHelmet>
  );
};

export default Chat;
