const log = console.log;
const $datos = document.getElementById("data__container");
const $form = document.getElementById('input');
const currencies = document.getElementById('currency');
const $cryptoSelect = document.getElementById('crypto');
const ListaCriptos = document.querySelector(".form__cryptos")
const result = document.getElementById("result")
const container = document.getElementById("container")
const button = document.querySelector(".submit")


$form.addEventListener('submit', (e) => { 
e.preventDefault();    
loadCurrencies(); 
});

const loadCurrencies =  async() => {
try{  
  const response = await fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=${currency.value}`); 
  const info = await response.json(); 
  const arr = info.Data;
  let $name = info.Data[$cryptoSelect.value].CoinInfo.FullName
  let name1 = info.Data[0].CoinInfo.FullName;
  let name2 = info.Data[1].CoinInfo.FullName;
  let name3 = info.Data[2].CoinInfo.FullName;
  let name4 = info.Data[3].CoinInfo.FullName;
  let name5 = info.Data[4].CoinInfo.FullName;
  let name6 = info.Data[5].CoinInfo.FullName;
  let name7 = info.Data[6].CoinInfo.FullName;
  let name8 = info.Data[7].CoinInfo.FullName;
  let name9 = info.Data[8].CoinInfo.FullName;
  let name10 = info.Data[9].CoinInfo.FullName;
  let $price =  "<br>" + "Current price: " + info.Data[$cryptoSelect.value].DISPLAY[currencies.value].PRICE; 
  let $max =  "Highest price of the day: " + info.Data[$cryptoSelect.value].DISPLAY[currencies.value].HIGH24HOUR;
  let $min =  "Lowest price of the day: " + info.Data[$cryptoSelect.value].DISPLAY[currencies.value].LOW24HOUR;
  let $lastUpdate = "Last Update: "+ info.Data[$cryptoSelect.value].DISPLAY[currencies.value].LASTUPDATE;
  let $variation = "Daily variation: " + info.Data[$cryptoSelect.value].DISPLAY[currencies.value].CHANGEPCT24HOUR;     
  function selectCriptos() {
    arr.forEach($cryptoSelect => {      
      ListaCriptos.innerHTML = ` 
      <option value="0">Select crypto</option>      
        <option value="0">${name1}</option>
        <option value="1">${name2}</option>
        <option value="2">${name3}</option>
        <option value="3">${name4}</option>
        <option value="4">${name5}</option>
        <option value="5">${name6}</option>
        <option value="6">${name7}</option>
        <option value="7">${name8}</option>
        <option value="8">${name9}</option>
        <option value="9">${name10}</option>
`;  
        button.innerHTML = `
        Get list`;                  
    })};    
  function showInfoPlease() {
    result.innerHTML = '';            
    const obtainedInfo = document.createElement('div');    
    obtainedInfo.classList.add('obtained_info');
    obtainedInfo.innerHTML = `
      <h4>${$name}:</h4>
      <p>${$price}</p>
      <p>${$max}</p>
      <p>${$min}</p>
      <p>${$variation}%</p>
      <p>${$lastUpdate}</p>
      `        
    result.appendChild(obtainedInfo);    
}
selectCriptos()
showInfoPlease()  
} catch(error){
  log("error");
} 
}

