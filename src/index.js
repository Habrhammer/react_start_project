import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: "John" },
  { id: 2, name: "Rick" },
  { id: 3, name: "Alex" },
  { id: 4, name: "Till" },
  { id: 5, name: "Paul" },
  { id: 6, name: "Bruce" },
  { id: 7, name: "Matt" },
];

let messageData = [
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, rerum optio! Vel delectus tenetur laboriosam numquam excepturi animi enim rem. Harum totam eos quis id pariatur blanditiis error rerum. Odio!",
  },
  {
    id: 2,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, cupiditate.",
  },
  {
    id: 3,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ullam voluptatibus dolorum unde ex tenetur nobis ducimus commodi nemo amet. Eius velit hic sequi nihil placeat perferendis quasi consectetur et repellendus corporis officia modi ratione, officiis dolorum porro nobis atque quam, ab, ad distinctio saepe tenetur earum quis? Perferendis, odio!",
  },
  {
    id: 4,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ullam voluptatibus dolorum unde ex tenetur nobis ducimus commodi nemo amet. Eius velit hic sequi nihil placeat perferendis quasi consectetur et repellendus corporis officia modi ratione, officiis dolorum porro nobis atque quam, ab, ad distinctio saepe tenetur earum quis? Perferendis, odio!",
  },
  {
    id: 5,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ullam voluptatibus dolorum unde ex tenetur nobis ducimus commodi nemo amet. Eius velit hic sequi nihil placeat perferendis quasi consectetur et repellendus corporis officia modi ratione, officiis dolorum porro nobis atque quam, ab, ad distinctio saepe tenetur earum quis? Perferendis, odio!",
  },
];

let postData = [
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi hic laboriosam earum sunt quibusdam eligendi vel mollitia, officia laudantium sed in maiores esse? Quod, minima reiciendis? Fugiat, voluptatum praesentium.",
    likes: 1,
  },
  {
    id: 2,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi porro praesentium pariatur illum consequuntur, in molestiae laborum iure atque accusantium debitis amet numquam voluptates ea libero ex vel ratione sed consectetur quod? Culpa soluta aut est ex placeat nisi, reprehenderit sequi quis doloribus asperiores. Ipsam pariatur incidunt ratione repudiandae.",
    likes: 3,
  },
  {
    id: 3,
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio sed vitae magni eum molestiae ratione!",
    likes: 5,
  },
];


ReactDOM.render(
  <React.StrictMode>
    <App appData={{dialogs: dialogsData, messages: messageData}} postData={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
