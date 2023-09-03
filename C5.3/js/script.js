const value = document.querySelector('input');
const btnNode = document.querySelector('.js-btn-request');
const resultNode = document.querySelector('.js-result');

function start() {
  let inputNum = Number(value.value);
  if (!Number(value.value)) {
    resultNode.innerHTML = 'Error! Enter a number.';
    console.log('Error! Enter a number.')
  } else if (0 < inputNum && inputNum < 11) {
      useRequest(inputNum, displayResult)
  } else {
      resultNode.innerHTML = 'Enter a number in a range from 1 to 10.';
      console.log('Enter a number in a range from 1 to 10.');
  }
};

btnNode.onclick = function() {
  start();
};

function useRequest(num, callback) {
  const url = `https://picsum.photos/v2/list/?limit=${num}`;
  let xhr = new XMLHttpRequest();
 
  xhr.open('GET', url, true);
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  }; 
  xhr.send();
  console.log('Request completed');
};

function displayResult(apiData) {
  let cards = '';
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards += cardBlock;
  });
    
  resultNode.innerHTML = cards;
};