import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"


const client = new ApolloClient({
link: new HttpLink({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
}),
cache: new InMemoryCache(),
})



ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client }>
    <App />
  </ApolloProvider>,
)
