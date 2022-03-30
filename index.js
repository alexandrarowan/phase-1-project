const bitCoinURL = "https://api.coindesk.com/v1/bpi/currentprice.json"
const fetchBitURL = () => {
    fetch(bitCoinURL)
    .then(resp => resp.json())
    .then(data => {coinBuild(data.bpi)
    }
    )}
fetchBitURL()

const currentBalance = document.querySelector('#current-balance')
const dollarBalance = document.createElement('h3')
const bitcoinBalance = document.createElement('h3')
let storedBitValue = 0
let storedUSDValue = 0

const coinBuild = (coinObj) => {
    const currentConversion = document.querySelector('#Current-Conversion')
    const dollar = document.createElement('h3')
    dollar.id = "us-dollar"
    dollar.textContent = `USD ${coinObj.USD.rate}`
    const GBP = document.createElement('h3')
    GBP.id = "brittish-pound"
    GBP.textContent = `GBP ${coinObj.GBP.rate}`
    const EUR = document.createElement('h3')
    EUR.id = "euro"
    EUR.textContent = `EUR ${coinObj.EUR.rate}`
    
    currentConversion.append(dollar, GBP, EUR)
    const rate = coinObj.USD.rate_float

    const currentPriceForm = document.querySelector('#current-price')
    currentPriceForm.addEventListener('submit', (e) => {
         e.preventDefault()
         coinWallet(rate);
         currentPriceForm.reset();
        })

    const priceForm = document.querySelector('#price-form')
    priceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        dollarWallet(rate)
        priceForm.reset()
    })
}



const coinWallet = (rate) => {
    const dollarInput = document.querySelector('#dollar-input').value
    if (isNaN(dollarInput) === true) {
        alert('Error! You must enter a number!')
    } else {
        const coins = parseFloat(dollarInput) / rate
        storedBitValue += coins
        bitcoinBalance.textContent = `${storedBitValue} coins`
        currentBalance.append(bitcoinBalance)
    }
}

const dollarWallet = (rate) => {
    const transferAmount = document.querySelector('#transfer-amount').value
    if (isNaN(transferAmount) === true) {
        alert('Error! You must enter a number!')
    } else {
        const dollars = parseFloat(transferAmount) * rate
        storedUSDValue += dollars
        dollarBalance.textContent = `${storedUSDValue} dollars`
        currentBalance.append(dollarBalance)
    }
}





