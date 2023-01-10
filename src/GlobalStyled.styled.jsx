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
        .castom-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          padding: 20px;
          /* background-color: rgb(240, 30, 50, 0.7); */
          background-image: linear-gradient(
            rgba(0, 176, 245, 0.445),
            rgba(149, 0, 248, 0.432)
          );
          border: solid;
          border-top-width: 24px;
          border-right-width: 24px;
          border-bottom-width: 14px;
          border-left-width: 6px;
          border-color: #00385e;
          animation-name: startspinner;
          animation-duration: 5000ms;
          animation-iteration-count: infinite;
        }
        @keyframes startspinner {
          0% {
            border-top-width: 24px;
            border-right-width: 24px;
            border-bottom-width: 14px;
            border-left-width: 6px;
            background-image: linear-gradient(
              rgba(0, 127, 245, 0.445),
              rgba(149, 0, 248, 0.432)
            );
          }
          25% {
            border-top-width: 14px;
            border-right-width: 24px;
            border-bottom-width: 24px;
            border-left-width: 14px;
            background-image: linear-gradient(
              rgba(0, 216, 245, 0.445),
              rgba(157, 0, 248, 0.432)
            );
          }

          50% {
            border-top-width: 6px;
            border-right-width: 14px;
            border-bottom-width: 14px;
            border-left-width: 24px;
            background-image: linear-gradient(
              rgba(0, 245, 151, 0.445),
              rgba(74, 0, 248, 0.432)
            );
          }
          75% {
            border-top-width: 14px;
            border-right-width: 6px;
            border-bottom-width: 14px;
            border-left-width: 24px;
            background-image: linear-gradient(
              rgba(0, 229, 245, 0.445),
              rgba(128, 0, 248, 0.432)
            );
          }
          100% {
            border-top-width: 24px;
            border-right-width: 14px;
            border-bottom-width: 6px;
            border-left-width: 14px;
            background-image: linear-gradient(
              rgba(0, 176, 245, 0.445),
              rgba(198, 0, 248, 0.432)
            );
          }
        }
      `}
    />
  );
};
