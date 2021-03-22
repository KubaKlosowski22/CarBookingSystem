const { Model } = require('objection');


class Rent extends Model {
    static get tableName() {
        return 'rent';
    }
}

module.exports = Rent; 