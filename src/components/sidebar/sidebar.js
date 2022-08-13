import React from 'react';
import './sidebar.css';

const Language =['ar','de','en','es','fr','he','it','nl','no','pt','ru','sv','ud','zh'];
const pageNo=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const sources=['bbc-news',
'al-jazeera-english',
'cnn','google-news','fox-news',
'the-washington-post','politico',
'abc-news','engadget','the-verge'];
const country=[
    'ae','ar','at','au',
    'be','bg','br','ca',
    'ch','cn','co','cu','cz','de','eg','fr','gb','gr','hk','hu','id','ie','il','in'
    ,'it','jp','kr','lt','lv','ma','mx','my','ng','nl','no','nz','ph','pl','pt','ro'
    ,'rs','ru','sa','se','sg','si','sk','th','tr','tw','ua','us','ve','za'
];

const category=[
    'business','entertainment','general','health','science','sports','technology'
]

export default function Sidebar(prop){
    const [menuList,setMenuList]=React.useState(()=>[]);
    

    return  <div className='sidebar-container'>
                <div className='optionList'
                onClick={()=>{
                    Array.from(document.getElementsByClassName('optionList'))[0].style.transform='scale(0,0)';
                   Array.from(document.getElementsByClassName('optionList'))[0].style.visibility='hidden';  
                }}
                >
                    {menuList?.map((item,i)=>{
                        return <div
                        key={i}
                        className='subOptionList'
                        onClick={()=>{
                            if(prop.text === 'lang')
                                prop.setLang(item);
                            else if(prop.text === 'category')
                                prop.setCategory(item);
                            else if(prop.text === 'country')
                                prop.setCountry(item);
                            else if (prop.text === 'num')
                                prop.setPage(item);
                            else if(prop.text === 'sources')
                                prop.setSources(item);

                            console.log(item);
                            Array.from(document.getElementsByClassName('optionList'))[0].style.transform='scale(0,0)';
                            Array.from(document.getElementsByClassName('optionList'))[0].style.visibility='hidden';

                        }}
                        >{item}</div>
                    })}
                </div>
                <div className='options'
                
                onClick={(e)=>{
                    if(prop.type === 'Everything' || prop.type === 'Sources'){
                    setMenuList(Language);
                    prop.setText('lang');
                Array.from(document.getElementsByClassName('optionList'))[0].style.visibility="visible";
                Array.from(document.getElementsByClassName('optionList'))[0].style.transform='scale(1,1)';
                    }else{alert('Please Have a type of Everything');
                        e.preventDefault();}
                }}>
                    { prop.type === 'Everything' || prop.type === 'Sources'?<span
                    style={{color:'white',fontFamily:'blanka'}}
                    >Language</span>:<span
                    style={{color:'Graytext',fontFamily:'blanka'}}
                    >Language</span>}
                </div>
                <div className='options'
                onClick={(e)=>{
                    if(prop.type === 'Everything'){
                    setMenuList(pageNo);
                    prop.setText('num');
                Array.from(document.getElementsByClassName('optionList'))[0].style.visibility="visible";
                Array.from(document.getElementsByClassName('optionList'))[0].style.transform='scale(1,1)';
                    }else{alert('Please Have a type of  Everything');
                        e.preventDefault();}
                }}
                >
                    {prop.type === 'Everything'?<span
                    style={{color:'white',fontFamily:'blanka'}}
                    >Page</span>:<span
                    style={{color:'Graytext',fontFamily:'blanka'}}
                    >Page</span>}
                </div>
        
                <div className='options'
                onClick={(e)=>{
                    if(prop.type === 'Headlines' || prop.type === 'Sources' ){
                    setMenuList(category);
                    prop.setText('category');
                Array.from(document.getElementsByClassName('optionList'))[0].style.visibility="visible";
                Array.from(document.getElementsByClassName('optionList'))[0].style.transform='scale(1,1)';
                    }else{alert('Please Have a type of Either Everything or Headlines');
                        e.preventDefault();}
                }}
                >
                    {prop.type === 'Headlines' || prop.type === 'Sources' ?<span
                    style={{color:'white',fontFamily:'blanka'}}
                    >category</span>:<span
                    style={{color:'Graytext',fontFamily:'blanka'}}
                    >category</span>}
                </div>
                <div className='options'
                onClick={(e)=>{
                    if(prop.type === 'Headlines' || prop.type === 'Sources'){
                    setMenuList(country);
                    prop.setText('country');
                Array.from(document.getElementsByClassName('optionList'))[0].style.visibility="visible";
                Array.from(document.getElementsByClassName('optionList'))[0].style.transform='scale(1,1)';
                    }else{alert('Please Have a type of Either Everything or Headlines');
                        e.preventDefault();}
                }}
                >
                    {prop.type === 'Headlines' || prop.type === 'Sources'?<span
                    style={{color:'white',fontFamily:'blanka'}}
                    >country</span>:<span
                    style={{color:'Graytext',fontFamily:'blanka'}}
                    >country</span>}
                </div>
                <div className='options'
                onClick={(e)=>{
                    if(prop.type === 'Headlines'){
                    setMenuList(sources);
                    prop.setText('sources');
                Array.from(document.getElementsByClassName('optionList'))[0].style.visibility="visible";
                Array.from(document.getElementsByClassName('optionList'))[0].style.transform='scale(1,1)';
                    }else{alert('Please Have a type of Either Everything or Headlines');
                        e.preventDefault();}
                }}
                >
                    {prop.type === 'Headlines'?<span
                    style={{color:'white',fontFamily:'blanka'}}
                    >Sources</span>:<span
                    style={{color:'Graytext',fontFamily:'blanka'}}
                    >Sources</span>}
                </div>
            </div>
}