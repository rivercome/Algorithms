/* 买卖股票的最佳时机 */
/* 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。 */

var maxProfit = function(prices) {
    let buy = prices[0]
      let money = 0
      for (let price of prices) {
        buy = Math.min(buy, price)
        money = Math.max(money, price - buy)
      }
      return money
    };