const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  artist() {
    return this.hasMany('Artist');
  }
}

module.exports = bookshelf.Model('User',User);