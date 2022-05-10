import React, {
  useEffect,
  useState
} from 'react';

export default function Show_News({setSite}) {

  let [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
      Get_News();
    
  }, [loading])

  

  const Get_News = () => {
    //let url = "https://jsonplaceholder.typicode.com/todos/1";
    let url =  "https://newsapi.org/v2/everything?q=keyword&apiKey=42de5138331648bd8cb0d8cba013ce85"

    fetch(url)
      .then((response) => response.json())
      .then(function (data) {
        let articles = [];
        // articles.push({"title":"eins"});
        // articles.push({"title":"zwei"});
        // articles.push({"title":"drei"});
        // articles.push({"title":"vier"});
        // setArticles(articles);
        data.articles.forEach(article => {
        articles.push(article)
        });
        setArticles(articles);
      });
  }

  const getOutput = ()=> {
    let output = [];
    
    articles.forEach(article => {
      output.push(<tr><td><p><a href={article.url}>{article.title}</a></p>{article.description}</td>
      <td><img src={article.urlToImage} height="100%" width="300vw"></img></td></tr>)
    });
  

    return output;
  }
return (
        <div>
          <h1>Breaking News</h1>
          <table>{getOutput()}</table>
        </div>)
}