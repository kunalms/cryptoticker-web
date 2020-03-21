var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var CurrencySchema = new mongoose.Schema({
    id: {type: Number, index: true},
    name: {type: String},
    symbol: {type: String},
    slug: {type: String},
    num_market_pairs: {type: Number},
    date_added: {type: Date},
    tags: {type: [String]},
    max_supply: {type: Number},
    circulating_supply: {type: Number},
    total_supply: {type: Number},
    platform: {type: String},
    cmc_rank: {type: Number},
    last_updated: {type: Date},
    quote: {
        USD: {
            price: {type: Number},
            volume_24h: {type: Number},
            percent_change_1h: {type: Number},
            percent_change_24h: {type: Number},
            percent_change_7d: {type: Number},
            market_cap: {type: Number},
            last_updated: {type: Date}
        }
    }
}, {timestamps: true});

CurrencySchema.plugin(uniqueValidator, {message: 'is already taken.'});

mongoose.model('Currency', CurrencySchema);
