import { useState} from 'react';
import imageApi from '../../utils/imageApi';
import Modal from 'components/Modal';
import ImageGallery from '../ImageGallery/ImageGallery';

import { RiImage2Fill } from "react-icons/ri";

import { BackgroundBtn, iconStyle} from "./Background.styled";


export default function Background({changeBackground}){
    const [showeModal, setShoweModal] = useState(false);
    const [backgroundImg, setBackgroundImg] = useState(null);

    const onModal=async()=>{
        console.log("Потрібно робити фетч обчислювати галерею та запускати модалку");
        const data = await imageApi();
        console.log(data.hits);
        setBackgroundImg(data.hits);
        setShoweModal(true);
    };

    const changeImage=(newImage)=>{
        changeBackground(newImage);
        setShoweModal(false);
    }

    return  <>
            <BackgroundBtn type="button" disabled={showeModal} onClick={onModal}>
                <RiImage2Fill style={iconStyle}/>
            </BackgroundBtn>
           {showeModal && <Modal onClose={()=>setShoweModal(false)}>
                <ImageGallery reply={backgroundImg} changeImage={changeImage}/>
            </Modal>}
            </>
};
