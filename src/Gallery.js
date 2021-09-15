import React, { useState } from 'react';
import Left from './left.png';
import Right from './right.png';
import myImages from './images';


const Gallery =() =>{

    const school = myImages.slice(0,10)
    const images = myImages.slice(10,25)
    const lotos = myImages.slice(25,47)
    const bands = myImages.slice(47,56)
    const life = myImages.slice(56,69)
  
    const [currentImage, setCurrentImage] = useState(myImages[25]);
   
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
                    {renderedImages(school)}               
                </div> 
                <div className='pics-chain'> 
                    {renderedImages(images)} 
                </div> 
                <div className='pics-chain'> 
                    {renderedImages(lotos)}                
                </div> 
                <div className='pics-chain'> 
                    {renderedImages(bands)}                
                </div> 
                <div className='pics-chain'> 
                    {renderedImages(life)}                
                </div> 
            </div>           
                {enlarged()}                                         
        </div>
    )
}

export default Gallery;