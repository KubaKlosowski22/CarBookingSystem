const { Model } = require('objection');


class Car extends Model {
    static get tableName() {
        return 'car';
    }
}

module.exports = Car; 