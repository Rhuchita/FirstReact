import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(143, 163, 142, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(143, 163, 142, 1);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: rgb(16, 148, 11, 1);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(143, 163, 142, 0.9);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(143, 163, 142, 1);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(143, 163, 142, 1);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(29, 147, 11);
  background: linear-gradient(
    53deg,
    rgba(29, 147, 11, 1) 36%,
    rgba(21, 155, 8, 1) 76%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;
