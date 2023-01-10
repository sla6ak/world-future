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
          width: 75%;
          height: 75%;
          font-weight: 700;
          color: #003b05;
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
          border-color: #0062a3;
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
              rgba(104, 255, 247, 0.445),
              rgba(91, 38, 236, 0.432)
            );
          }
          25% {
            border-top-width: 14px;
            border-right-width: 24px;
            border-bottom-width: 24px;
            border-left-width: 14px;
            background-image: linear-gradient(
              rgba(68, 207, 250, 0.445),
              rgba(30, 80, 219, 0.432)
            );
          }

          50% {
            border-top-width: 6px;
            border-right-width: 14px;
            border-bottom-width: 14px;
            border-left-width: 24px;
            background-image: linear-gradient(
              rgba(0, 147, 245, 0.445),
              rgba(0, 128, 248, 0.432)
            );
          }
          75% {
            border-top-width: 14px;
            border-right-width: 6px;
            border-bottom-width: 14px;
            border-left-width: 24px;
            background-image: linear-gradient(
              rgba(35, 74, 245, 0.445),
              rgba(51, 148, 228, 0.432)
            );
          }
          100% {
            border-top-width: 24px;
            border-right-width: 14px;
            border-bottom-width: 6px;
            border-left-width: 14px;
            background-image: linear-gradient(
              rgba(41, 178, 241, 0.445),
              rgba(25, 29, 253, 0.432)
            );
          }
        }
      `}
    />
  );
};
