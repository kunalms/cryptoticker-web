var router = require('express').Router();
var mongoose = require('mongoose');
var Currency = mongoose.model('Currency');
var User = mongoose.model('User');
var auth = require('../auth');

// Preload article objects on routes with ':currency_id'
router.param('currency_id', function (req, res, next, id) {
    Currency.findOne({id: id})
        .then(function (currency) {
            if (!currency) {
                return res.sendStatus(404);
            }
            req.currency = currency;
            return next();
        }).catch(next);
});


router.get('/', auth.required, function (req, res, next) {
    var query = {};

    return Promise.all([
        Currency.find(query)
            .exec(),
        Currency.count(query).exec(),
        req.payload ? User.findById(req.payload.id) : null,
    ]).then(function (results) {
        var currencies = results[0];
        var currenciesCount = results[1];
        var user = results[2];

        return res.json({
            currencies: currencies.map(function (article) {
                return article.toJSONFor(user);
            }),
            currenciesCount: currenciesCount
        });
    }).catch(next);
});

// Favorite an currency
router.post('/:currency_id/favorite', auth.required, function (req, res, next) {
    var currencyId = req.currency._id;

    User.findById(req.payload.id).then(function (user) {
        if (!user) {
            return res.sendStatus(401);
        }

        return user.favorite(currencyId).then(function () {
            return req.currency.updateFavoriteCount().then(function (currency) {
                return res.json({currency: currency.toJSONFor(user)});
            });
        });
    }).catch(next);
});

// Un-favorite an currency
router.delete('/:currency_id/favorite', auth.required, function (req, res, next) {
    var currencyId = req.currency._id;

    User.findById(req.payload.id).then(function (user) {
        if (!user) {
            return res.sendStatus(401);
        }

        return user.unfavorite(currencyId).then(function () {
            return req.currency.updateFavoriteCount().then(function (currency) {
                return res.json({currency: currency.toJSONFor(user)});
            });
        });
    }).catch(next);
});

module.exports = router;
