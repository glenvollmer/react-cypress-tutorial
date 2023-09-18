const { MongoClient } = require('mongodb');

class MongoDbConnection {
  constructor() {
    this.#setUri();
    this.#createClient();
  }

  #setUri() {
    this.uri = 'mongodb://127.0.0.1:27017/?directConnection=true';
  }

  async #createClient() {
    this.client = new MongoClient(this.uri);
  }

  async connect() {
    const connection = await this.client.connect();
    this.db = connection.db('react-cypress-tutorial');
  }

  async disconnect() {
    const disconection = await this.client.close();
    return disconection;
  }
}

module.exports = { MongoDbConnection };
