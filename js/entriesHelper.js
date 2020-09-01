function createCard(data, pElement) {
  const header = document.createElement('header');

  const container = document.createElement('span');

  const titleHeader = document.createElement('h2');
  titleHeader.setAttribute('class', 'title');
  titleHeader.textContent = data.title;


  const subtitle = document.createElement('p');
  subtitle.textContent = `by ${data.givenName || ""} ${data.familyName || ""}`;

  container.appendChild(titleHeader);
  container.appendChild(subtitle);
  
  const imgSrc = document.createElement('img');
  imgSrc.setAttribute('src', data.imgSrc);
  imgSrc.setAttribute('alt', data.title);

  const cardDesc = document.createElement('div');
  const desc = document.createElement('p');
  desc.textContent = data.description;

  header.appendChild(container);
  header.appendChild(imgSrc);
  cardDesc.appendChild(desc);

  pElement.appendChild(header);
  pElement.appendChild(cardDesc);
}