import React from 'react'
import PropTypes from "prop-types";

export const Modal = (props) => {
    const [open, close] = props;
    return (
        { open && (
            <Background>
                <ModalBox close={close}>
                    <CloseButton onClick={close}>X</CloseButton>
                    <Content>{value}</Content>
                </ModalBox>
            </Background>
        )}
  )
}
