var bitcore = require('bitcore');
bitcore.Message = require('./lib/message');
bitcore.Message.bitcore = bitcore;

module.exports = bitcore.Message;