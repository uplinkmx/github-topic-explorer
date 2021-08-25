# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth.

To interact with the Github GraphQL API you'll need to have
  * a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
  * You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.


## Evaluation:

* We will pay particular attention to the way the code is organized, and to the overall readability
* Unit tests will be greatly appreciated
* Design will be ignored, however usability and accessibility will be taken into consideration
* Remember to update this README with instructions on how to install, run and test your application
* Your first goal is to have a working app, but feel free to improve the application however you see fit
* We hope that you can complete the assignment within 2 hours but don't set any time constraints
* Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

* the first thing i do is read a documentation of github graphql to understand how i need to interact whit the api, 
then i view the overview explorer to make sense, how create the query [explorer]https://docs.github.com/en/graphql/overview/explorer
after that y create the app whit the command "npx create-react-app github-topic-explorer" and install 
react-bootstrap and dotenv the first to use the bootstrap framework , and the second to read .env files.
in index.js add "import 'bootstrap/dist/css/bootstrap.min.css';" and "require('dotenv').config()"
this to get the framework and the dotenv in all the app

* then create the component folder and add topic.js which is our component to show the topics and interact whit the api.

* in topic.js

* create two const to create an array from the response of graphql and the title of the page (or component);
use "useEffect" for the first call to the function that retreive information about the topic 'react'
have a function called 'ObtainTopics' which is the main function what interact whit github graphql api,
in 'ObtainTopics' receives a variable which is the topic to search,
create options with the headers and query to send that to the api
inside have a function async 'fetchData' which call the url 'https://api.github.com/graphql' whit the header options
previously created and wait for the reponse, when the response arrive, call setTopics and setTitle to upgrade the array 
of topics and the title

* this component render a container which have the title of the search and iterate the array of results in topics to view the 
related topics and stargazer of that topic have a button to view related topics of that topic.

* in app.js only create a call to the component Topics.

### How to run app & test

* First you need to clone
git clone https://github.com/uplinkmx/github-topic-explorer.git

* Get in into directory 
cd github-topic-explorer

* Install dependencies
npm install

* Create empty .env file whit this constants and add your [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)  
* REACT_APP_GITHUB_API_TOKEN= 'your_api_key'
* REACT_APP_TOPIC='react'

* Start project whit 'npm start'

* if you need change the first topic to search you need to modify REACT_APP_TOPIC in your .env file please remember if you change 
some information of your .env file please restart the project to load this changes.

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics 

* Code Structuring:
if we wanted more options maybe we need a create a services to make all the calls and using axios 

* Refactoring:

* Additional Features:
put loading element which show after click the button and wait for the reponse to hide
