import react, {useState, useEffect} from 'react';

    const useFetch = (cat,lang) => {
      const [data, setData] = useState();
      const APIKEY = '';
      const LINK = `https://newsapi.org/v2/top-headlines?category=${cat}&country=${lang}&apiKey=`;
  
      
      useEffect(() => {
              fetch(`${LINK}${APIKEY}`)
              
              .then(response => response.json())
              .then(response => {
                setData(response);
              })

      },[cat,lang]);
  
      return [ data , setData];
  
      
  };
export default useFetch