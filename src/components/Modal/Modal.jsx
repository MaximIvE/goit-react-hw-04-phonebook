import { useEffect } from "react";
import { createPortal } from 'react-dom';
import { Overlay, ModalContetn } from './Modal.styled';
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root');

const Modal=(props)=>{
    //Цей метод запускається, коли модальне вікно монтується
    useEffect(()=>{
        window.addEventListener('keydown', closeModalEsc);
        document.documentElement.style.overflow='hidden';

        return ()=>{
            //Коли модалка розмонтовується
            window.removeEventListener('keydown', closeModalEsc);
            document.documentElement.style.overflow=null;
        }
    });

    const closeModalEsc = (e) => {
        if(e.code === 'Escape'){
            props.onClose();
        }
    }

    const closeModalBackdrop = (e) =>{
        if(e.target === e.currentTarget){ props.onClose()}
    }

    const {children} = props;
    return createPortal(<Overlay onClick={closeModalBackdrop}>
        <ModalContetn >
            {children}
        </ModalContetn>
    </Overlay>, modalRoot);
};

export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element,
};
  