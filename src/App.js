import React, { useState } from "react";
import styled from "styled-components";
import { Button, Center } from "./components";

const Container = styled(Center)`
  width: 40%;
  height: 300px;
  margin: 20px auto;
  border: 2px solid lightgrey;
  border-radius: 8px;
  display: flex;
  position: relative;
`;

const Background = styled(Center)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
`;

const ModalBox = styled(Center)`
  width: 300px;
  height: ${({ height }) => height ?? 120}px;
  background-color: white;
  border-radius: 12px;
  color: black;
  display: flex;
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

function App() {
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
      {/* <Modal isOpen={modal} onClickClose={closeModal} /> */}
      {/* <Modal>
        <Button>Open Modal</Button>
      </Modal> */}
      {modal && (
        <Background>
          <ModalBox>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <Content>HELLO CODESTATES!</Content>
          </ModalBox>
        </Background>
      )}
    </Container>
  );
}

export default App;
