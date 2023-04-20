const button = document.querySelector('#myButton');
const token = '';

button.addEventListener('click', getFirmyData);

function getFirmyData() {
  const nip = document.querySelector('#nipInput').value;
  const url = `https://test-dane.biznes.gov.pl/api/ceidg/v2/firmy?query&nip=${nip}`;

  fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('There was a problem with the fetch operation.');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // render data on the page
    })
    .catch(error => {
      console.error(error);
    });
}
