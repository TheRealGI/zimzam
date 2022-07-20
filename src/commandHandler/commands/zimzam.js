const contextHelper = require('../../util/contextHelper');

module.exports = {
  name: 'zimzam',
  needsArgs: false,
  timeout: 5,
  async execute(client, channel, context, message) {
    if(!contextHelper.isBroadcaster(context)) {
      return false;
    }

    var order = this.getOrder();
    client.say(channel, `${order.join(' ')} @${contextHelper.getDisplayName(context)}`);
    return true;
 },
  getOrder() {
    var order = [];
    for (var i = 0; i< 6; i++)
    {
      order.push(this.getRandomNumber(order));
    }
    return order;
 },
  getRandomNumber(numbersToExclude) {
    let rolled
    while(!rolled) {
     const ranNumber = Math.floor(Math.random() * 6) + 1;
     if (numbersToExclude.indexOf(ranNumber) === -1) rolled = ranNumber;
    }
    return rolled;
 }
}