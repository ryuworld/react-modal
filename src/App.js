import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  width: 40%;
  height: 300px;
  margin: 20px auto;
  border: 2px solid lightgrey;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Button = styled.button`
  padding: 20px;
  border: none;
  border-radius: 30px;
  background-color: purple;
  color: white;
  cursor: pointer;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  width: 300px;
  height: 120px;
  background-color: white;
  border-radius: 12px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
`;

const Content = styled.p`
  font-size: 17px;
`;

function Modal() {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Container>
      <Button onClick={showModal}>Open Modal</Button>
      {modal === true ? (
        <Background>
          <ModalBox>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <Content>HELLO CODESTATES!</Content>
          </ModalBox>
        </Background>
      ) : null}
    </Container>
  );
}

export default Modal;
