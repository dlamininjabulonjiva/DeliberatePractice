import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache({
    typePolicies: {
      Mission: {
        fields: {
          links: {
            read(_, { readField }) { 
              const twitter = readField('twiiter');
              const wikipedia = readField('wikipedia');
              const website = readField('website');
              const links = [];

              if (twitter) {
                links.push(twitter);
              }

              if (wikipedia) {
                links.push(wikipedia);
              }

              if (website) {
                links.push(website);
              }

              return links;
            }
          }
        }
      }
    }
  })
});;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
