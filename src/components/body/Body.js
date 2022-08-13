import React from 'react';
import './Body.css';

const Body = ({data}) => {

    return <div className='body-container'>
         <span>NEWS</span>
            <div className='body-subcontainer'>
                {data? data.map((item,i) => {
                    
                    return <div className="NewsDetails" key={i*Math.random()*10000000}>
                        {
                            item.title?<span
                            style={{color:'white',backgroundColor:'rgb(84, 54, 89)',
                            width:'100%',height:'50px',fontWeight:900}}
                            >
                                {item.title}
                            </span>:null
                        }

                        {
                            item.urlToImage || 1?<div
                            style={{height:'250px',width:'100%',
                        }}
                            >
                              <img src={item.urlToImage || 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png'} alt={'Img'} 
                              className='image-urlTO'/>

                            </div>
                            : 
                            null
                        }

                        <div className='card-overflow'>
                        {
                            item.content?<div
                            className='news-content'
                            >
                                {item.content}
                            </div>:<div
                            className='news-content'
                            ><span>Content is currently unavailable.. You will be Updated soon</span></div>
                        }

                        {
                            item.description?<div
                            className='news-description'
                            >
                                {item.description}
                            </div>:<div
                            className='news-description'
                            >
                            <span>description is currently unavailable. With adequate informations, updation will be done <br /> Thank You</span>
                            </div>
                        }

                        {
                            item.publishedAt?<span
                            className='publishedAt'
                            >
                                {item.publishedAt}
                            </span>:null
                        }
                        {
                            item.url?
                                <button className='details-url' onClick={()=> window.open(`${item.url}`,'_blank')}>MORE</button>:null
                        }
                        </div>
                    </div>;
                }):<img src={'https://insider.in/assets/images/extras/no-results.svg'} className='no-result' alt={'No Result Found'}/>
               }
            </div>
            </div>
}


export default Body;