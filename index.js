const getPlanetList = (url) => {
  $.get(url,(response) => {
    console.log(response);
    response.results.forEach((planet) => {
      $.get(planet,(planetDetails) => {
        console.log(planetDetails);
      });
    });
  });
}

//getPlanetList('data/earth-like-results.json');

const getJSON = (url) => {
  return new Promise((resolve,reject) => {
    $.get(url,(response) => {
      resolve(response);
    });
  });
}

getJSON('data/earth-like-results.json').then((response) => {
  console.log(response);
    let promises = response.results.map((planetURL) => {
                      return getJSON(planetURL);
                   });
    Promise.all(promises).then((values) => {
      console.log(values);
    });
});
