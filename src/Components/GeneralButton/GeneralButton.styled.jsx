import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const GeneralButton = styled(Button)(
  ({ theme, bts }) => `
    border-radius: 10px;
    font-weight: 400;
    max-width: 350px;
    font-size: 18px;
    line-height: 27px;
    height: 50px;
    margin-bottom: 20px;
    color: ${
      bts === 'link' ? theme.colors.buttons.accent : theme.colors.buttons.white
    };
    border-color:${
      bts === 'link' ? theme.colors.buttons.accent : theme.colors.buttons.accent
    };
    background-color: ${
      bts === 'link' ? theme.colors.buttons.white : theme.colors.buttons.accent
    };
     :hover {
        background-color: ${
          bts === 'link'
            ? theme.colors.buttons.hoverWhite
            : theme.colors.buttons.hoverAccent
        };
    }
    @media (min-width: 768px) {
        max-width: 450px;
    }
`
);
