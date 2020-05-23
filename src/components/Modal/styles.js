import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  background: #36393f;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: ${props => (props.size === 'big' ? 600 : 400)}px;

  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    > span {
      color: #b9bbbe;
      font-size: 14px;
      line-height: 16px;
      font-weight: 600;
      margin-top: 15px;
    }

    > input {
      height: 40px;
      padding: 10px;
      border-radius: 3px;
      border-radius: 1px solid rgba(0, 0, 0, 0.3);
      background-color: rgba(0, 0, 0, 0.1);
      color: #f6f6f6;
      margin-top: 8px;
      transition: border 0.15s ease;
      font-size: 16px;

      &:focus {
        border-color: #7289da;
      }
    }

    > button {
      margin-top: 20px;
    }
  }

  -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  ${css`
    @-webkit-keyframes slide-top {
      0% {
        -webkit-transform: translateY(-100px);
        transform: translateY(-100px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
    @keyframes slide-top {
      0% {
        -webkit-transform: translateY(-100px);
        transform: translateY(-100px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
  `}
  }
`;
