/**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 */

module.exports.connections = {

  /***************************************************************************
  *                                                                          *
  * Local disk storage for DEVELOPMENT ONLY                                  *
  *                                                                          *
  * Installed by default.                                                    *
  *                                                                          *
  ***************************************************************************/
  localDiskDb: {
    adapter: 'sails-disk'
  },

  /***************************************************************************
  *                                                                          *
  * MySQL is the world's most popular relational database.                   *
  * http://en.wikipedia.org/wiki/MySQL                                       *
  *                                                                          *
  * Run: npm install sails-mysql                                             *
  *                                                                          *
  ***************************************************************************/
  mySqlServer: {
    adapter: 'sails-mysql',
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'b9ed94608b0e2e', //optional
    password: '6ad31735', //optional
    database: 'heroku_99cee46134e2045' //optional
  },
//mysql://b9ed94608b0e2e:6ad31735@us-cdbr-iron-east-04.cleardb.net/heroku_99cee46134e2045?reconnect=true`
//mysql://b9ed94608b0e2e:6ad31735@us-cdbr-iron-east-04.cleardb.net/heroku_99cee46134e2045?reconnect=true
  /***************************************************************************
  *                                                                          *
  * MongoDB is the leading NoSQL database.                                   *
  * http://en.wikipedia.org/wiki/MongoDB                                     *
  *                                                                          *
  * Run: npm install sails-mongo                                             *
  *                                                                          *
  ***************************************************************************/
  // someMongodbServer: {
  //   adapter: 'sails-mongo',
  //   host: 'localhost',
  //   port: 27017,
  //   user: 'username', //optional
  //   password: 'password', //optional
  //   database: 'your_mongo_db_name_here' //optional
  // },

  /***************************************************************************
  *                                                                          *
  * PostgreSQL is another officially supported relational database.          *
  * http://en.wikipedia.org/wiki/PostgreSQL                                  *
  *                                                                          *
  * Run: npm install sails-postgresql                                        *
  *                                                                          *
  *                                                                          *
  ***************************************************************************/
 /*   heroku_postgres : {
    adapter: 'sails-postgresql',
    user: 'btdvbqdupkaiit',
    password: 'fc1b14ba124ea3e5d06d1bf8bb3fe04f3710e70153199927c8a59821f8d4b843',
    host: 'ec2-23-23-225-116.compute-1.amazonaws.com',
    port: '5432',
    database: 'd1of1fnj600pph',
    ssl: false
  }*/
  
    heroku_postgres : {
      adapter: 'sails-postgresql',
      user: 'ubuntu',
      password: 'password',
      host: 'localhost',
      port: '5432',
      database: 'c9Pg'
    }

  /***************************************************************************
  *                                                                          *
  * More adapters: https://github.com/balderdashy/sails                      *
  *                                                                          *
  ***************************************************************************/

};
