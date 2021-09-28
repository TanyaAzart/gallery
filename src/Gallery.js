import React, { useState } from 'react';
import Left from './left.png';
import Right from './right.png';
import myImages from './images';


const Gallery =() =>{

    const school = myImages.slice(0,10)
    const images = myImages.slice(10,25)
    const lotos = myImages.slice(25,49)
    const bands = myImages.slice(49,57)
    const life = myImages.slice(57,89)

    const items = [{
        title:  "Школа",
        pics:  school
    },
    
    {
        title:  "Театр",
        pics: lotos
    },
    {
        title: "Выступления",
        pics: bands
    },
    {
        title: "Образы",
        pics: images
    },
    {
        title: "Жизнь",
        pics: life
    }]  
       
    const [currentItem, setCurrentItem] = useState(items[1]);
    const [currentImage, setCurrentImage] = useState(currentItem.pics[0]);

    const [visibility, setVisibility] = useState('none');

    const onItemClick = (item)=>{
        setCurrentItem (item);
        setCurrentImage(item.pics[0])
    };
   
    const onImageClick = (image)=>{  
        setCurrentImage(image);     
    };

    const onImageHover =(string)=> {
        setVisibility(string);
    }

    const onLeftClick =() => {
        const newImage = currentItem.pics.find(image=>image.id===currentImage.id - 1) || currentItem.pics[currentItem.pics.length-1];
        setCurrentImage(newImage)
    };

    const onRightClick =() => {
        const newImage = currentItem.pics.find(image=>image.id===currentImage.id + 1) || currentItem.pics[0];
        setCurrentImage(newImage)
    };

    const renderedItems = items.map(item=> {
        return(
            <React.Fragment>
                <li onClick={()=>onItemClick(item)}>{item.title}</li>
            </React.Fragment>
        )
    })

    const renderedImages = (imgs) =>{
        
        return imgs.map(image=>{

            const atr = image===currentImage ? 'active' : '';
            
            return(<React.Fragment  key={image.id} >
                        <img 
                            id={atr} 
                            src={image.small} 
                            alt ='thumbnail'  
                            onClick={()=>onImageClick(image)}
                        /> 
                    </React.Fragment>            
            )
        });
    } 

    const enlarged = () => {         
        if (currentImage) {

            const atr = currentImage.style || '';            
            
            return (                             
                <div 
                    className={`enlarged ${atr}`} 
                    onMouseEnter={()=>onImageHover('')}
                    onMouseLeave={()=>onImageHover('none')}
                    > 
                    <figure>                           
                        <img  
                            src= {currentImage.large} 
                            alt={currentImage.alt} 
                            onClick={()=>onImageClick(currentImage)}
                            />
                        <br/>
                        <figcaption className='caption'>{currentImage.caption}</figcaption>
                    </figure>
                        <div className='left-icon' onClick={()=>onLeftClick()} style={{display: `${visibility}`}}>
                            <img id='icon' src ={Left} alt=''/>
                        </div>
                        <div className='right-icon' onClick={()=>onRightClick()} style={{display: `${visibility}`}}>
                            <img id='icon' src={Right}  alt=''/>
                        </div>                                        
                </div>      
            )
        } 
    }

    return (
        <div className='gallery'>
            <div className='pics-chain'>                   
                    {renderedImages(currentItem.pics)}               
                </div>
            <div className='under-chain'>
                <div className='items'>
                    <ul>
                        {renderedItems}
                    </ul>
                </div>
            {enlarged()} 
                </div>                                                   
        </div>
    )
}

export default Gallery;