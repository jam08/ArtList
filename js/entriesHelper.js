function createCard(data, pElement) {
  const header = document.createElement('header');

  const container = document.createElement('span');

  const titleHeader = document.createElement('h2');
  titleHeader.setAttribute('class', 'title');
  const titleText = document.createTextNode(data.title);

  titleHeader.appendChild(titleText);

  let fullName = "";
  if(data.familyName && data.givenName) {
    fullName = `${data.givenName} ${data.familyName}`;
  } else if(!data.familyName) {
    fullName = data.givenName;
  } else {  
    fullName = data.familyName;
  }

  const subtitle = document.createElement('p');
  const subtitleText = document.createTextNode(`by ${fullName}`);
  subtitle.appendChild(subtitleText);

  container.appendChild(titleHeader);
  container.appendChild(subtitle);
  
  const imgSrc = document.createElement('img');
  imgSrc.setAttribute('src', data.imgSrc);
  imgSrc.setAttribute('alt', data.title);

  const cardDesc = document.createElement('div');
  const desc = document.createElement('p');
  const descText = document.createTextNode(data.description); 
  
  desc.appendChild(descText);

  header.appendChild(container);
  header.appendChild(imgSrc);
  cardDesc.appendChild(desc);

  pElement.appendChild(header);
  pElement.appendChild(cardDesc);
}