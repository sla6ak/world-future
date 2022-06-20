import { Global, css } from '@emotion/react';

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
          color: #212121;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        html {
          box-sizing: border-box;
          overflow-x: hidden;
        }
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
        *,
        *::before,
        *::after {
          padding: 0px;
          margin: 0px;
          box-sizing: border-box;
        }
        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
        a {
          color: rgb(159, 192, 255);
          text-decoration: none;
        }
        .date {
          font-weight: 600;
        }
        canvas {
          min-width: 100vw;
          min-height: 100vh;
        }
      `}
    />
  );
};
