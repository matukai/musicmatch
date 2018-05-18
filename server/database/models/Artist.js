const bookshelf = require('./bookshelf');
const user = require('./Users');
class Artist extends bookshelf.Model {
  user() {
    return this.belongsTo('User', 'user_id');
  }
}

module.exports = bookshelf.Model('Artist', Artist);