



const bitCoinURL = "https://api.coindesk.com/v1/bpi/currentprice.json"
const fetchBitURL = () => {
    fetch(bitCoinURL)
    .then(resp => resp.json())
    .then(data => {coinBuild(data.bpi)
      console.log(typeof data.bpi.USD.rate)
    }
    )}
fetchBitURL()
const coinBuild = (coinObj) => {
    console.log(coinObj)
    const currentConversion = document.querySelector('#Current-Conversion')
    const dollar = document.createElement('h3')
    dollar.textContent = `USD ${coinObj.USD.rate} Conversion Rate`
    const GBP = document.createElement('h3')
    GBP.textContent = `GBP ${coinObj.GBP.rate} Conversion Rate`
    const EUR = document.createElement('h3')
    EUR.textContent = `EUR ${coinObj.EUR.rate} Conversion Rate`
    
    currentConversion.append(dollar, GBP, EUR)

    const currentPriceForm = document.querySelector('#current-price')
    currentPriceForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(e.target)
    const dollarInput = document.querySelector('#dollar-input').value
    console.log(typeof dollarInput)
    if (isNaN(dollarInput) === true) {
        alert('Error! You must enter a number!')
    } else {
        const rate = Math.abs(coinObj.USD.rate)
        console.log(rate)
        // console.log('hi')
    }
    
    // const newObj = {
        
    // }
    // function doMath(input, rate) {
    //     return input / rate
    // }
})
}



