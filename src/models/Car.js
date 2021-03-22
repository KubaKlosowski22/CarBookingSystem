const { Model } = require('objection');
const Rent = require('./Rent');

class Car extends Model {
    static get tableName() {
        return 'car';
    }
    static get relationMappings() {
        return {
            rent : {
                relation: Model.HasManyRelation,
                modelClass: Rent,
                join: {
                    from: 'car.id',
                    to: 'rent.car_id'
                }
            }
        }
    }
}

module.exports = Car; 