import React, { useState } from 'react';
import Left from './left.png';
import Right from './right.png';
import myImages from './images';


const Gallery =() =>{

    const images = myImages.slice(0,5)
    const images1 = myImages.slice(5,15)
    const images2 = myImages.slice(15,37)
    const images3 = myImages.slice(37,43)
    const images4 = myImages.slice(43,48)
  
    const [currentImage, setCurrentImage] = useState(myImages[15]);
   
    const onImageClick = (image)=>{  
    //     return image !== currentImage ? setCurrentImage(image) : setCurrentImage(null); 
        setCurrentImage(image);     
    };

    const onLeftClick =() => {
        const newImage = myImages.find(image=>image.id===currentImage.id - 1) || myImages[myImages.length-1];
        setCurrentImage(newImage)
    };

    const onRightClick =() => {
        const newImage = myImages.find(image=>image.id===currentImage.id + 1) || myImages[0];
        setCurrentImage(newImage)
    };

    const renderedImages = (imgs) =>{
        
        return imgs.map(image=>{

            const atr = image===currentImage ? 'active' : '';
            
            return(<React.Fragment  key={image.id} >
                <img id={atr} src={image.small} alt ='thumbnail'  onClick={()=>onImageClick(image)}/> 
                    </React.Fragment>            
            )
        });
    } 

    const enlarged = () => {         
        if (currentImage) {
            
            const atr = currentImage.style || '';
            
            return (                             
                <div className={`enlarged ${atr}`}> 
                    <div className='left-icon' onClick={()=>onLeftClick()}>
                        <img id='icon' src ={Left} alt=''/>
                        </div> 
                           <figure>
                                <img  src= {currentImage.large} 
                                    alt={currentImage.alt} onClick={()=>onImageClick(currentImage)}/>
                                    <br/>
                                    <figcaption className='caption'>{currentImage.caption}</figcaption>
                            </figure>                       
                        <div className='right-icon' onClick={()=>onRightClick()}>
                        <img id='icon' src={Right}  alt=''/>
                    </div>                  
                </div>      
            )
        } 
        else {
            return;
        }
    }

    return (
        <div className='gallery'>
            <div className='thumbs'>
                <div className='pics-chain'> 
                    {renderedImages(images)}               
                </div> 
                <div className='pics-chain'> 
                    {renderedImages(images1)} 
                </div> 
                <div className='pics-chain'> 
                    {renderedImages(images2)}                
                </div> 
                <div className='pics-chain'> 
                    {renderedImages(images3)}                
                </div> 
                <div className='pics-chain'> 
                    {renderedImages(images4)}                
                </div> 
            </div>           
                {enlarged()}                                         
        </div>
    )
}

export default Gallery;