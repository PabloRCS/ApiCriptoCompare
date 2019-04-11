document.querySelector('#api')

function getData () {    
    
    var url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,XRP,ZEC,DOGE&tsyms=BTC,USD,BRL&api_key=38412a447aeefd3e4922c29e1663250772dedf32291c7f2c4f3898b410e2af3e'
    fetch(url)
    .then(res => res.json())
    .then(data => {
        tabela(data)          
    })
}
function tabela(data) {
      
    
      api.innerHTML = `  
      <th scope="row">BTC</th>
        <td>${data.BTC.BTC}</td>
        <td>${data.BTC.USD}</td>
        <td>${data.BTC.BRL}</td>
      </tr>
      <th scope="row">ETH</th>
        <td>${data.ETH.BTC}</td>
        <td>${data.ETH.USD}</td>
        <td>${data.ETH.BRL}</td>
      </tr>
      <th scope="row">DASH</th>
        <td>${data.DASH.BTC}</td>
        <td>${data.DASH.USD}</td>
        <td>${data.DASH.BRL}</td>
      </tr>
      <th scope="row">XRP</th>
        <td>${data.XRP.BTC}</td>
        <td>${data.XRP.USD}</td>
        <td>${data.XRP.BRL}</td>
      </tr>
      <th scope="row">ZEC</th>
        <td>${data.ZEC.BTC}</td>
        <td>${data.ZEC.USD}</td>
        <td>${data.ZEC.BRL}</td>
      </tr>
      
      
      `
    
    }      
      
      
      
      
      
      
      
      
      
      