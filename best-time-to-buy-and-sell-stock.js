const maxProfit = (prices) => {
  let buyPrice = prices[0]
  let maxProfit = 0
  for(let i=0;i<prices.length;i++){
    if(buyPrice<prices[i]){
        buyPrice=prices[i]
    }
    maxProfit=Math.max(maxProfit,prices[i]-buyPrice)
  }
  return maxProfit
}