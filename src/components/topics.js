import { useState,useEffect } from "react";

const Topics = (props) => {
    const [topics, setTopics] = useState([]);
    const [title,setTitle]= useState(process.env.REACT_APP_TOPIC);

        useEffect(() => {
            ObtainTopics(title);
            }, []);
    
    function ObtainTopics(topic){
        const token = process.env.REACT_APP_GITHUB_API_TOKEN
        const oauth = { 'Authorization': 'bearer ' + token , 'Content-Type': 'application/json'}
        const query =`
        {
        topic(name: "${topic}") 
        {
          relatedTopics(first: 10) {
            id
            name
            stargazerCount
          }
          name
          id
        }
      }
      `
          async function fetchData() {
            try {
              const requestOptions = {
                method: 'POST',
                headers: oauth ,
                body: JSON.stringify({query})
              };
              const response = await fetch('https://api.github.com/graphql',requestOptions);
              const json = await response.json();
              const data = json.data.topic.relatedTopics
              setTopics(data);
              setTitle(topic);
            } catch (error) {
              console.error(error)
            }
          }
          if (topic !== "") {
            fetchData();
          }
    }
      
        return (
          <div className="container">
            <center><h1>Topics related to : {title}</h1></center>
            <div className="row">
            {topics.map((topics) => (
              <div className="col-4 pb-5"  key={topics.id}>
              <div className="card text-center">
                  <div className="card-header">
                  <h1 className="card-title"  onClick={ () => ObtainTopics(topics.name)}>{topics.name}</h1>
                    </div>
                <div className="card-body">
                  <h3 className="card-subtitle mb-2 text-muted">stargazer: {topics.stargazerCount}</h3>
                  <p className="card-text">id: {topics.id}</p>
                  <button onClick={ () => ObtainTopics(topics.name)} className="btn btn-primary">view related topics</button>
                </div>
              </div>
              </div>
            ))}
            </div>
          </div>
        )
      };
  
      export default Topics