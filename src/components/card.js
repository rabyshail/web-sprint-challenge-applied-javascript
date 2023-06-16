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
  const cardWrap = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  cardWrap.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  
  imgContainer.appendChild(img);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  cardWrap.appendChild(headline)
  cardWrap.appendChild(author);
  //console.log(cardWrap)

  headline.textContent = article.headline;
  img.src = article.authorPhoto;
  authorName.textContent = `BY ${article.authorName}`;
  
  cardWrap.addEventListener("click", () => {
    console.log(article.headline)
  })
  //what
return cardWrap;
};

 import axios from 'axios';
 const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5001/api/articles')
    .then(response => {
      const data = response.data;
      const articles = data.articles;
      for(const category in articles){
        const articlList = articles[category];
        articlList.forEach(article => {
          const newCard = Card(article);
          const container = document.querySelector(selector);
          container.appendChild(newCard);
        });
      }
     //console.log(cardContainer)
    })
    .catch(error => {
      console.log('Error', error);
    });
}


export { Card, cardAppender }
