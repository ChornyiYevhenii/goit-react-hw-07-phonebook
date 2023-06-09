import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const DeleteButton = styled.button`
  font-family: 'Death Note Font', sans-serif;
  --green: #8e8d8d;
  font-size: 15px;
  padding: 8px 15px;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 3px solid rgb(107, 128, 214);
  background: linear-gradient(
    to right,
    rgba(142, 141, 141, 0.1) 1%,
    transparent 40%,
    transparent 60%,
    rgba(142, 141, 141, 0.1) 100%
  );
  color: var(--green);
  box-shadow: inset 0 0 10px rgba(142, 141, 141, 0.4),
    0 0 9px 3px rgba(142, 141, 141, 0.1);

  :hover {
    color: rgb(107, 128, 214);
    box-shadow: inset 0 0 10px rgba(142, 141, 141, 0.6),
      0 0 9px 3px rgba(142, 141, 141, 0.2);
  }

  :before {
    content: '';
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(142, 141, 141, 0.1) 40%,
      rgba(142, 141, 141, 0.1) 60%,
      transparent 100%
    );
  }

  :hover:before {
    transform: translateX(15em);
  }
`;

