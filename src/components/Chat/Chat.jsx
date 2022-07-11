import {
  LeftHelmet,
  FormSubmit,
  Title,
  FormTextField,
  ButtonLetter,
  BodyLetter,
} from './Chat.styled';
import { useGetAllChatQuery } from 'server/chatFetch';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useCreateMassageMutation } from 'server/chatFetch';
import { validationLetterSchema } from 'utilits/validationForms';

const Chat = ({ lordInfo }) => {
  const [buttonDis, setButtonDis] = useState(false);
  const { data: allChat } = useGetAllChatQuery();
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
      }, 10 * 1000);
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
        e.stopPropagation();
      }}
    >
      <Title>Chat Game:</Title>
      <div>
        {allChat?.letters.map((el, index, arr) => {
          if (index <= arr.length - 11) return null;
          return (
            <div key={el._id}>
              <div
                style={{
                  color: el.rassa === 'Yellow' ? '#bfcf2e' : '#0b5dbb',
                  fontSize: '14px',
                  fontWeight: '800',
                }}
              >
                {el.autor}:
              </div>
              <BodyLetter>{el.massage}</BodyLetter>
              {/* <div>{el.date}</div> */}
            </div>
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
        <div>You can send one letter of min</div>
        <ButtonLetter type="submit" disabled={buttonDis}>
          Send
        </ButtonLetter>
      </FormSubmit>
    </LeftHelmet>
  );
};

export default Chat;
