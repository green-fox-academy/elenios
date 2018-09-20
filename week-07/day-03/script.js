window.onload = () => {
  let database = [
    'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    `?api-key=131c7a4be9004e288960796104f0f68e`,
    `&q=apollo11`,
  ].join('');

  fetch(database)
  .then((resp) => (resp.json()))
  .then(response => {
    
    response.response.docs.forEach(element => {
      let block = document.createElement('div')
      let list = document.createElement('ul');
      let item1 = document.createElement('li');
      let item2 = document.createElement('li');
      let item3 = document.createElement('li');
      let item4 = document.createElement('li');

      document.querySelector('body').appendChild(block)
      block.appendChild(list);
      item1.textContent = element.web_url;
      item2.textContent = element.headline.main;
      item3.textContent = element.snippet;
      item4.textContent = element.pub_date;
      list.appendChild(item1);
      list.appendChild(item2);
      list.appendChild(item3);
      list.appendChild(item4);
    });

    // let link = response.response.docs[0].web_url;
    // element.textContent = link;
    // document.querySelector('body').appendChild(list);
    // list.appendChild(element);
    console.log(response);
  });

} 