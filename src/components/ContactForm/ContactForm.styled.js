import styled from 'styled-components';

export const SubmitInput = styled.input`
  border-radius: 10px;
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 350px;
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  border: 3px solid;
  border-radius: 20px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: blue;
  label {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    color: black;
  }
`;


export const SubmitButton = styled.button`
  font-family: 'Death Note Font', sans-serif;
  --green: #8e8d8d;
  font-size: 15px;
  padding: 0.7em 2.7em;
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

// export const inputStile = styled.input`
/* font-family: 'Death Note Font', sans-serif; */
// `;
