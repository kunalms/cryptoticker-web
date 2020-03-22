var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var User = mongoose.model('User');

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
    },
    favoritesCount: {type: Number, default: 0},
}, {timestamps: true});

CurrencySchema.plugin(uniqueValidator, {message: 'is already taken.'});

CurrencySchema.methods.updateFavoriteCount = function () {
    var currency = this;

    return User.count({favorites: {$in: [currency._id]}}).then(function (count) {
        console.log(count);
        currency.favoritesCount = count;

        return currency.save();
    });
};

CurrencySchema.methods.toJSONFor = function (user) {
    return {
        id: this.id,
        name: this.name,
        symbol: this.symbol,
        slug: this.slug,
        numMarketPairs: this.num_market_pairs,
        dateAdded: this.date_added,
        tags: this.tags,
        maxSupply: this.max_supply,
        circulatingSupply: this.circulating_supply,
        totalSupply: this.total_supply,
        platform: this.platform,
        cmcRank: this.cmc_rank,
        lastUpdated: this.last_updated,
        favorited: user ? user.isFavorite(this._id) : false,
        favoritesCount: this.favoritesCount,
        quote: this.quote,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

mongoose.model('Currency', CurrencySchema);
