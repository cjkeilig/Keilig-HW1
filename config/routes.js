/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  ***************************************************************************/

  'get /': 'CustomerController.customer',
  'get /customer/create' : 'CustomerController.create',
  'get /customer/edit' : 'CustomerController.edit',
  'get /customer/updates' : 'CustomerController.updates',
  'get /customer/add' : 'CustomerController.add',
  'get /customer/stock' : 'CustomerController.stock',
  'get /customer/createStock': 'CustomerController.createStock',
  'get /customer/createAsset' : 'CustomerController.createAsset',
  'get /customer/destroyStock' : 'CustomerController.destroyStock',
  'get /customer/destroyAsset' : 'CustomerController.destroyAsset',
  'get /customer/editStock': 'CustomerController.editStock',
  'get /customer/editAsset': 'CustomerController.editAsset',
  'get /customer/destroy' : 'CustomerController.destroy',
  'get /customer/quote' : 'CustomerController.quote'
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
