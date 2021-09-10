import React, { useState } from 'react';


const Gallery =({images}) =>{

    const myImages = images;

    const [currentImage, setCurrentImage] = useState(null);
   
    const onImageClick = (image)=>{  
        return image !== currentImage ? setCurrentImage(image) : setCurrentImage(null);              
    };

    const renderedImages = myImages.map (image=>{

        const atr = image===currentImage ? 'active' : '';
        
        return(<React.Fragment  key={image.id} >
            <img id={atr} src={image.small} alt ='thumbnail' onClick={()=>onImageClick(image)}/>
        </React.Fragment>            
        )
    });

    const enlarged = () => {         
        if (currentImage) {
            return (<div>
                <img  src= {currentImage.large} alt={currentImage.alt}/>
            </div>)
        } 
        else {
            return (<div></div>)
        }
    }

    return (
        <div className='pics-chain'> 
            {renderedImages}
            <div>
                {enlarged()}
            </div>
        </div>
    )
}

export default Gallery;