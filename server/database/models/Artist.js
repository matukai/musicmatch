const bookshelf = require('./bookshelf');

class Artist extends bookshelf.Model {
  user() {
    return this.belongsTo('User', 'user_id');
  }
}

module.exports = bookshelf.Model('Artist', Artist);