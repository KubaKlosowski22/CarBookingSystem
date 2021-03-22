const { Model } = require('objection');
const Rent = require('./Rent');

class User extends Model {
    static get tableName() {
        return 'user';
    }
    static get relationMappings() {
        return {
            rent : {
                relation: Model.HasManyRelation,
                modelClass: Rent,
                join: {
                    from: 'user.id',
                    to: 'rent.user_id'
                }
            }
        }
    }
}

module.exports = User; 