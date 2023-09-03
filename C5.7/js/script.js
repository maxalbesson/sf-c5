const value1 = document.querySelector('.input1');
const value2 = document.querySelector('.input2');
const btnNode = document.querySelector('.js-btn-request');
const resultNode = document.querySelector('.js-result');

function useRequest(page, limit) {
  return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then((response) => {
    return response.json();
  })
    .catch(() => {
    console.log('Error')
    resultNode.innerHTML = '<p>Something wrong</p>';
  })
};

function displayResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img class="card-image" src="${item.download_url}" alt="image">
        <p>${item.author}</p>
      </div>`;
        cards = cards + cardBlock;
    });
    resultNode.innerHTML = cards;
};

btnNode.addEventListener('click', async () => {
  let inputPage = Number(value1.value);
  let inputLimit = Number(value2.value);
  if ((inputPage >= 1 && inputPage <= 10) && (inputLimit >= 1 && inputLimit <= 10)) {
      const url = await useRequest(inputPage, inputLimit);     
      displayResult(url);
      localStorage.setItem('lastData', JSON.stringify(url));
      console.log(localStorage.getItem('lastData'))  
  } else if (((inputPage < 1 || inputPage > 10 || !Number(inputPage)) && (inputLimit < 1 || inputLimit > 10 || !Number(inputLimit)))) {
    resultNode.innerHTML = 'Page number and limit out of range from 1 to 10.';
    console.log('Page number and limit out of range from 1 to 10.')
  } else if (!Number(inputPage) || (inputPage < 1 || inputPage > 10)) {
    resultNode.innerHTML = 'Page number out of range from 1 to 10.';
    console.log('Page number out of range from 1 to 10.')
  } else {
      resultNode.innerHTML = 'Limit out of range from 1 to 10.';
      console.log('Limit out of range from 1 to 10.');
  }
});

if (localStorage.lastData){
    const storage = JSON.parse(localStorage.getItem('lastData'));
    console.log(storage)
    displayResult(storage);
} else {
  console.log('no data')
};