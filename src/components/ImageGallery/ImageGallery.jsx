import { Gallery, Item, Img } from "./ImageGallery.styled";
import PropTypes from 'prop-types';

export default function ImageGallery({reply, changeImage}){
    const HandkeClickCard=(e)=>{
        const image = e.currentTarget.children[0];
        console.log(image.dataset.source);
        changeImage(image.dataset.source);
    }

    const galleryList=()=>{
        return reply.map(({id, webformatURL, largeImageURL, tags})=>{
            return (
                <Item key ={id} onClick={HandkeClickCard}>
                    <Img src={webformatURL} alt={tags} data-source={largeImageURL}/>
                </Item>)}
            )
    }

    return (
        <Gallery>
            {galleryList()}
        </Gallery>
    )
};

ImageGallery.propTypes = {
    reply: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeImage: PropTypes.func.isRequired,
};