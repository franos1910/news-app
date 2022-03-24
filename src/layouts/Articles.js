import React from 'react'
import { useEffect } from 'react';
import useFetch from '../components/fetch';
import { useLocation } from 'react-router';
import styled from 'styled-components';


const ArticlesWrapper = styled.div`
  padding:10px;
  max-width:1180px;
  margin: 0 auto;
  column-count: 3;
  padding-top:100px;
  div{
  margin-bottom:20px;
  border:2px solid black;
  border-radius: 2%;
  padding:20px;
  height:fit-content;
  break-inside: avoid;
  }
  @media(max-width:900px){
      column-count:2;
      padding-top:0; 
    }
  @media(max-width:550px){
      column-count:1;
      width:80%
  }
  div > img{
    width:100%;
  }
  div > span{
    font-weight:bold;
  }
`

function Articles() {
    const location = useLocation();
    const [articles, setArticles]=useFetch(location.pathname.slice(4), location.pathname.slice(1,3));

 
    useEffect(()=>{
      setArticles();
    },[],[location.pathname.slice(1,3)])
  

  return (
      <ArticlesWrapper>
        { articles? articles.articles.map(article => 
          <div key={article.url}>
            <img src={article.urlToImage}/>
            <a href={article.url}>{article.title}</a>
            <p>{article.description}</p>
            <span>{article.author}</span>
          </div>
            ) : null}
     </ArticlesWrapper>
  )
}

export default Articles