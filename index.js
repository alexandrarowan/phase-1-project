



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
    const rate = coinObj.USD.rate_float

    const currentPriceForm = document.querySelector('#current-price')
    currentPriceForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const dollarInput = document.querySelector('#dollar-input').value
    if (isNaN(dollarInput) === true) {
        alert('Error! You must enter a number!')
    } else {
        const coins = parseFloat(dollarInput) / rate
        bitcoinBalance.textContent = `${coins} coins`
        currentBalance.append(bitcoinBalance)

    }
    currentPriceForm.reset();
})
    const priceForm = document.querySelector('#price-form')
    priceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // e.stopPropagation();
        const transferAmount = document.querySelector('#transfer-amount').value
        // console.log(transferAmount)
        if (isNaN(transferAmount) === true) {
            alert('Error! You must enter a number!')
        } else {
            const dollars = parseFloat(transferAmount) * rate
            dollarBalance.textContent = `$ ${dollars} USD` 
            currentBalance.append(dollarBalance) 
            
        }
        priceForm.reset()
    })
}

const currentBal = (input) => {
    
}





