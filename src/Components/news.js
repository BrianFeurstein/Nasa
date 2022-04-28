import React, {
  useEffect,
  useState
} from 'react';

export default function Show_News() {

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
      output.push(<div>{article.title}</div>)
    });
    console.log(articles)
   //output.push(newsshow)
    return output;
  }
return (<h1>{getOutput()}</h1>)

}