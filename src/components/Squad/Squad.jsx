import {
  LeftHelmet,
  FormSubmit,
  Title,
  FormTextField,
  ButtonLetter,
} from './Chat.styled';
import { useGetAllChatQuery } from 'server/chatFetch';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';

const Chat = () => {
  const [buttonDis, setButtonDis] = useState(false);
  const { data: allChat, error } = useGetAllChatQuery();
  console.log(allChat);
  return (
    <LeftHelmet>
      <Title>Chat Game:</Title>
      {/* <ul>
        {allChat?.map(el => {
          return (
            <li>
              <div
                style={{
                  color: el.rassa === 'Yellow' ? '#bfcf2e' : '#0b5dbb',
                  fontSize: '20px',
                  fontWeight: '800',
                }}
              >
                {el.autor}
              </div>
              <div>{el.massage}</div><div>{el.date}</div>
            </li>
          );
        })}
      </ul> */}
      <FormSubmit>
        <FormTextField></FormTextField>
        <div>You can send one letter of min</div>
        <ButtonLetter
          disabled={buttonDis}
          onClick={() => {
            setButtonDis(true);
            setTimeout(() => {
              setButtonDis(false);
            }, 60 * 1000);
          }}
        >
          Send
        </ButtonLetter>
      </FormSubmit>
    </LeftHelmet>
  );
};

export default Chat;
