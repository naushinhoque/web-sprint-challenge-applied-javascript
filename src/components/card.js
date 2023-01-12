import axios from 'axios';
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardWrapper = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorName = document.createElement('span');

  cardWrapper.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  
  headline.textContent = article.headline;
  authorName.textContent = `By ${article.authorName}`;
  img.src = article.authorPhoto;

  cardWrapper.appendChild(headline);
  cardWrapper.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(authorName);

  return cardWrapper;
}
//const example = {
//authorName: 'Flora',
//authorPhoto: ':D',
//headLine: 'Hello'}
//console.log(Card(example));

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  let entryCards = document.querySelector(selector);
  axios.get(`http://localhost:5001/api/articles`)
  .then(response => {
    entryCards.appendChild(Card(response.data.articles.bootstrap[0]));
    entryCards.appendChild(Card(response.data.articles.bootstrap[1]));
    entryCards.appendChild(Card(response.data.articles.bootstrap[2]));

    entryCards.appendChild(Card(response.data.articles.javascript[0]));
    entryCards.appendChild(Card(response.data.articles.javascript[1]));
    entryCards.appendChild(Card(response.data.articles.javascript[2]));
    entryCards.appendChild(Card(response.data.articles.javascript[3]));

    entryCards.appendChild(Card(response.data.articles.jquery[0]));
    entryCards.appendChild(Card(response.data.articles.jquery[1]));
    entryCards.appendChild(Card(response.data.articles.jquery[2]));

    entryCards.appendChild(Card(response.data.articles.node[0]));
    entryCards.appendChild(Card(response.data.articles.node[1]));

    entryCards.appendChild(Card(response.data.articles.technology[0]));
    entryCards.appendChild(Card(response.data.articles.technology[1]));
    entryCards.appendChild(Card(response.data.articles.technology[2]));
    


    console.log(response.data.articles);
  }).catch(err => {
    console.log(err);
  })
}

export { Card, cardAppender }
