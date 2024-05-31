// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>

//     <GoogleOAuthProvider clientId="169211035036-3qk479chvuvu6tjkdd9cd9ajuev4sdvu.apps.googleusercontent.com" >
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
      
//     </GoogleOAuthProvider>
//   </React.StrictMode>
// );



import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<GoogleOAuthProvider  clientId="623961390683-k9kuqtn784mlh961h4l914be83g95hoi.apps.googleusercontent.com">
  <BrowserRouter>
        <App />
  </BrowserRouter> 

</GoogleOAuthProvider> 
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
