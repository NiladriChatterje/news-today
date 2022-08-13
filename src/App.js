import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import HeaderBody from './components/HeaderBody/HeaderBody'

const API_KEY='c8bcc26e4b6e486c8094d5789f4d1dc5';

export default function App(){
    const [text,setText]=React.useState(()=>'num');
    const [type,setType] =React.useState(()=>'Everything');
    const [isDisable,setIsDisable]=React.useState(()=>true);
    const [lang,setLang] =React.useState(()=>'en');
    const [page,setPage] =React.useState(()=>1);
    const [category,setCategory] =React.useState(()=>'business');
    const [country,setCountry] =React.useState(()=>'in');
    const [sources,setSources] =React.useState(()=>'bbc-news');
    const [data,setData] = React.useState(()=>[]);
    const [handleChange,setHandleChange] =React.useState(() => 'movies')


    React.useEffect(()=>{
       
        try{
        if(type === 'Everything')
        {
            if (text === 'lang'){
                async function getData(){
                    setHandleChange('all');
                    setIsDisable(false);
                    return await fetch(`https://newsapi.org/v2/everything?q=all&language=${lang}&apiKey=${API_KEY}`)
                    .then((response) => response.json()).then((data) => setData(data.articles)).catch(err => console.log(err));
                }
                getData();
            }
            else{
            async function getData(){
                setIsDisable(false);
                return await fetch(`https://newsapi.org/v2/everything?q=${handleChange}&page=${page}&apiKey=${API_KEY}`)
                .then((response) => response.json()).then((data) => setData(data.articles)).catch(err => console.log(err));
            }
            getData();

            }
        
    
    }
       else if(type === 'Headlines')
        {               
            if(text === 'country' || text === 'category')
           { async function getData(){
                return await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`)
                .then((response) => response.json()).then((data) => setData(data.articles)).catch(err => console.log(err));
            }
            getData();
        }
        else if(text === 'sources'){
            async function getData(){
                return await fetch(`https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${API_KEY}`)
                .then((response) => response.json()).then((data) => setData(data.articles)).catch(err => console.log(err));
            }
            getData();
        }
        }
      else  if(type === 'Sources')
        {   
            if(text === 'country')
            {async function getData(){
                return await fetch(`https://newsapi.org/v2/top-headlines/sources?country=${country}apiKey=${API_KEY}`)
                .then((response) => response.json()).then((data) => {setData(data.articles);console.log(data.articles)}).catch(err => console.log(err));
            }
            getData();
        }
        else if(text === 'category'){
            async function getData(){
                return await fetch(`https://newsapi.org/v2/top-headlines/sources?category=${category}apiKey=${API_KEY}`)
                .then((response) => response.json()).then((data) => {setData(data.articles);console.log(data.articles)}).catch(err => console.log(err));
            }
            getData();
        }
        else if(text === 'lang'){
            const getData = async function getData(){
                return await fetch(`https://newsapi.org/v2/top-headlines/sources?language=${lang}apiKey=${API_KEY}`)
                .then((response) => response.json()).then((data) => {setData(data.articles);console.log(data.articles)}).catch(err => console.log(err));
            }
            getData();
        }
    
    }
    }catch(error){
        console.log(error)
    }
    },
    [text,lang,page,category,country,sources,type,handleChange]);

    return <>
            
            <div className="App">             
                <input disabled={isDisable} 
                    id='Inputfield' type={'text'} 
                    onKeyDownCapture={(e)=>{
                    if(e.key === 'Enter')
                    {setHandleChange(e.target.value);
                    console.log(e.target.value)}}} 
                    placeholder={'Your Query'} />
                <Sidebar text={text} setText={setText} type={type} setLang={setLang} setPage={setPage} setCategory={setCategory} setCountry={setCountry} setSources={setSources} />
                <HeaderBody data={data} setType={setType} setIsDisable={setIsDisable} text={text}/>
            </div></>
}