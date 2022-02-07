function bitcoin(gold) {
  let priceOfBitcoin = 11949.16;
  let priceOf1gGold = 67.51;
  let stealGold = 0.3;

  let btc = 0;
  let day = 0;
  let sum = 0;
  let stealDay = 0;

  for (let i = 0; i < gold.length; i++) {
    if (btc === 0) {
      day++;
    }
    let g = Number(gold[i]);
    stealDay++;
    if (stealDay === 3) {
      g = g - g * stealGold;
      stealDay = 0;
    }

    sum += g * priceOf1gGold;

    for (let j = 0; j <= priceOfBitcoin; j++) {
      if (sum >= priceOfBitcoin) {
        sum -= priceOfBitcoin;
        btc++;
      } else {
        break;
      }
    }
  }
  console.log(`Bought bitcoins: ${btc}`);
  if (btc > 0) {
    console.log(`Day of the first purchased bitcoin: ${day}`);
  }
  console.log(`Left money: ${sum.toFixed(2)} lv.`);
}
bitcoin(["100", "200", "300"]);
