module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR TWEEDR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const flexswimControllerCallbacks = require('./controllers/flexswim')(allModels);

  app.get('/landing', flexswimControllerCallbacks.landing);
  app.get('/', flexswimControllerCallbacks.index);
  app.get('/register', flexswimControllerCallbacks.registerForm);
  app.post('/register', flexswimControllerCallbacks.register);
  app.get('/login', flexswimControllerCallbacks.loginForm);
  app.post('/login', flexswimControllerCallbacks.login);
  app.get('/logout', flexswimControllerCallbacks.logout);

// ┌─┐┌┬┐┌┬┐  ┌─┐┌─┐┬─┐┌─┐┌─┐┌┐┌┌─┐┬    ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐
// ├─┤ ││ ││  ├─┘├┤ ├┬┘└─┐│ ││││├─┤│    ││││ │├┬┘├┴┐│ ││ │ │
// ┴ ┴─┴┘─┴┘  ┴  └─┘┴└─└─┘└─┘┘└┘┴ ┴┴─┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴

  app.get('/workout/new', flexswimControllerCallbacks.newForm);
  app.post('/workout', flexswimControllerCallbacks.new);


// ┌─┐┬ ┬┌─┐┬ ┬  ┌─┐┌─┐┬─┐┌─┐┌─┐┌┐┌┌─┐┬    ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐┌─┐
// └─┐├─┤│ ││││  ├─┘├┤ ├┬┘└─┐│ ││││├─┤│    ││││ │├┬┘├┴┐│ ││ │ │ └─┐
// └─┘┴ ┴└─┘└┴┘  ┴  └─┘┴└─└─┘└─┘┘└┘┴ ┴┴─┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴ └─┘
  //SHOW ONE WORKOUT WITH ID
  app.get('/workout/:id', flexswimControllerCallbacks.showIndividualWorkOut);

// ┌─┐┌┬┐┬┌┬┐  ┌─┐┌─┐┬─┐┌─┐┌─┐┌┐┌┌─┐┬    ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐┌─┐
// ├┤  │││ │   ├─┘├┤ ├┬┘└─┐│ ││││├─┤│    ││││ │├┬┘├┴┐│ ││ │ │ └─┐
// └─┘─┴┘┴ ┴   ┴  └─┘┴└─└─┘└─┘┘└┘┴ ┴┴─┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴ └─┘

  app.get('/workout/:id/edit', flexswimControllerCallbacks.editForm);
  app.put('/workout/:id', flexswimControllerCallbacks.editPut);


// ┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐  ┌─┐┌─┐┬─┐┌─┐┌─┐┌┐┌┌─┐┬    ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐┌─┐
//  ││├┤ │  ├┤  │ ├┤   ├─┘├┤ ├┬┘└─┐│ ││││├─┤│    ││││ │├┬┘├┴┐│ ││ │ │ └─┐
// ─┴┘└─┘┴─┘└─┘ ┴ └─┘  ┴  └─┘┴└─└─┘└─┘┘└┘┴ ┴┴─┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴ └─┘

  app.delete('/workout/:id', flexswimControllerCallbacks.deleteWorkOut);

  // app.get('/about/', flexswimControllerCallbacks.about);

  // app.get('/addfollower', flexswimControllerCallbacks.followerForm);
  // app.post('/addfollower', flexswimControllerCallbacks.follower);
};