(function () {

  const sq = es.newSolrQuery().rdfType("http://example.com/PieceOfArt").context('1').list();
  // const sql = sq.list();
  sq.getEntries().then(entries => {
    const data ={
      title: "http://purl.org/dc/terms/title",
      description: "http://purl.org/dc/terms/description",
      imgSrc: "http://xmlns.com/foaf/0.1/img",
      artist: "http://example.com/artist",
    };

    if(entries && entries.length > 0) {
      const results = document.getElementById('results');
      const ul = document.createElement('ul');

      entries.forEach(entry => {
        let li = document.createElement('li');
        li.setAttribute('class', 'card');

        const {title, description, imgSrc, artist} = entry.projection(data);

        es.newSolrQuery()
          .resource(artist)
          .list()
          .getEntries().then(artistEntry => {
            artistEntry.forEach(en => {
              let artistName = en.projection({
                  "familyName": "http://xmlns.com/foaf/0.1/familyName",
                  "givenName": "http://xmlns.com/foaf/0.1/givenName"
                });
              let entryObj = {
                title: title,
                description: description,
                imgSrc: imgSrc,
                ...artistName
              } 
              createCard(entryObj, li);
            });

          });

        ul.appendChild(li);
      });
      results.appendChild(ul);

    } else {
      const noResults =  document.createElement('p');
      noResults.setAttribute('class', 'no-results');
      
      const divText = document.createTextNode('No entries found!');
      noResults.appendChild(divText);

      results.appendChild(noResults);

    }
  }).catch(err => console.log(err));
})();
