function debounce(func, delay) {
    let timeOutId;
  return function (...args) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout( () => {
      func.apply(this, args);
    }, delay);
  };
}

function performSearch() {
    const inputValue = document.getElementById('inp').value;
    console.log('Searching:', inputValue);
    filterItem(inputValue);
}


const input  = document.getElementById("inp");

const requestSearchedInput = debounce(performSearch, 2000);

input.addEventListener('input', requestSearchedInput);

function filterItem(inputText) {
    fetch('/api/searchparam', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            params: inputText
        })
    }).then(res => console.log("response ", res.json()))
        .then(data => console.log("data ", data))
        .catch(error => console.log("error ", error));
}