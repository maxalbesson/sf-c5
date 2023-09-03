const value1 = document.querySelector('.input1');
const value2 = document.querySelector('.input2');
const btnNode = document.querySelector('.js-btn-request');
const resultNode = document.querySelector('.js-result');

function useRequest(num1, num2) {
  return fetch(`https://picsum.photos/${num1}/${num2}`)
    .then((response) => {
    return response.blob();
  })
    .then(blob => URL.createObjectURL(blob))
    .catch(() => {
    console.log('Error')
  })
};

btnNode.addEventListener('click', async () => {
  let inputNum1 = Number(value1.value);
  let inputNum2 = Number(value2.value);
  if (!Number(value1.value) || !Number(value2.value)) {
    resultNode.innerHTML = 'Error! Enter a number.';
    console.log('Error! Enter a number.')
  } else if ((inputNum1 >= 100 && inputNum1 <= 300) && (inputNum2 >= 100 && inputNum2 <= 300)) {
      const url = await useRequest(inputNum1, inputNum2)
      resultNode.innerHTML = `<img src='${url}' alt='image'>`
  } else {
      resultNode.innerHTML = 'Enter a number in a range from 100 to 300.';
      console.log('Enter a number in a range from 100 to 300.');
  }
});
