 //must npm install js-sha256 and use it here
var sha256 = require('js-sha256');
const SALT = "saltprotector";

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

//LANDING PAGE FOR USER TO LOGIN/REGISTER
  let landing = (request, response) => {
        response.render('flexswim/landing');
  };

//SHOWS ALL WORKOUTS FOR CURRENT USER OR NOWORKOUTYET PAGE (FOR NEW USER AND THOSE WHO HAVE YET TO CREATE WORKOUTS)
  let index = (request, response) => {
        let userId = request.cookies.userId;
        db.flexswim.showAll(userId, (error, queryResult) => {
        if (error) {
          console.error('error getting workout:', error);
          response.sendStatus(500);
        }
            if (queryResult.rowCount >= 1) {
                console.log('able to show');
                console.log(queryResult.rows);
                let username = request.cookies.username;
                let data = {
                userId: userId,
                username: username,
                show: queryResult.rows
                };
                response.render('flexswim/index', data);
            } else {
                console.log('not able to show');
                //DECIDE WHAT TO RENDER IF GOT ERROR GOING TO INDEX PAGE
                response.render('flexswim/noworkoutyet', {username: request.cookies.username});
            }
      });
  };

//FOR GET'S ('/REGISTER') PATH
  let registerForm = (request, response) => {
    response.render('flexswim/register');
  };

//FOR POST'S ('/REGISTER') PATH
  let register = (request, response) => {
    //the username here is same with the queryResult in register's dbPoolInstance
    db.flexswim.register(request.body, (error, username) => {
        console.log(username);
        if (error) {
            console.log("Error", error);
            response.status(404).send('error', error);
        }
        if (username.rowCount = 1) {
            let user_id = username.rows[0].id;
            let hashedUser = sha256(user_id+SALT);
            response.cookie('username', username.rows[0].name);
            response.cookie('loggedIn', hashedUser);
            response.cookie('userId', user_id);
            response.redirect('/');
        } else {
          console.log('User could not be created');
        }
        });
};

//FOR GET'S ('/LOGIN') PATH
  let loginForm = (request, response) => {
    response.render('flexswim/login');
  };

//FOR POST'S ('/LOGIN') PATH
  let login = (request, response) => {
    //the loginName here is same with the queryResult in login's dbPoolInstance
    db.flexswim.login(request.body, (error, loginName) => {
        console.log(loginName);
        if (error) {
            console.log("Error", error);
            response.status(404).send('error', error);
        } else {
            if (loginName.rowCount.length === 0) {
                response.send('Empty Result');
            } else {
                if (loginName.rowCount[0] === 0) {
                    response.send('Nothing here!')
                } else {
                        let hashedRequestPw = sha256(request.body.password + SALT);
                        //TODO: ensure correct username and password are being type
                        // let username = request.body.name;
                        // console.log(username);
                        if (loginName.rows[0].password === hashedRequestPw) {
                            let user_id = loginName.rows[0].id;
                            let hashedUser = sha256(user_id+SALT);
                            response.cookie('username', request.body.name);
                            response.cookie('loggedIn', hashedUser);
                            response.cookie('userId', user_id);
                            response.redirect('/');
                        } else {
                        response.send('Incorrect Password!');
                        }
                }
            }
        }
    });
  };

// ┌─┐┌┬┐┌┬┐  ┌─┐┌─┐┬─┐┌─┐┌─┐┌┐┌┌─┐┬    ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐
// ├─┤ ││ ││  ├─┘├┤ ├┬┘└─┐│ ││││├─┤│    ││││ │├┬┘├┴┐│ ││ │ │
// ┴ ┴─┴┘─┴┘  ┴  └─┘┴└─└─┘└─┘┘└┘┴ ┴┴─┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴

//FOR GET'S ('/NEW') PATH
  let newForm = (request, response) => {
  // check to see if a user is logged in
    let user_id = request.cookies.userId;
    let username = request.cookies.username;
    let hashedCookie = sha256(user_id + SALT);
    let data = {
        user_id: user_id,
        username: username
    }
    if (request.cookies.loggedIn === hashedCookie){
        // SELECT about user based on id
        response.render('flexswim/new', data);
    } else {
        response.send('wrong user!');
    }
  };

//FOR APP.POST'S ('/NEW') PATH
  let postNewStroke = (request, response) => {
      // use newWorkOut model method `create` to create new workout entry in db
      db.flexswim.newWorkOut(request.body, (error, queryResult) => {
        if (error) {
          console.error('error getting workout:', error);
          response.sendStatus(500);
        }
            if (queryResult.rowCount >= 1) {
                console.log('Workout created successfully');
                console.log(queryResult.rows[0]);
                let data = {
                name: request.cookies.username,
                workout: queryResult.rows[0]
                }
                response.render('flexswim/newworkout', data);
            } else {
                console.log('workout could not be created');
                response.render('flexswim/new');
            }
      });
  };


//FOR GET'S ('/WORKOUT/:ID') PATH
  let showIndividualWorkOut = (request, response) => {
  // check to see if a user is logged in
    let user_id = request.cookies.userId;
    let username = request.cookies.username;
    let hashedCookie = sha256(user_id + SALT);
    if (request.cookies.loggedIn === hashedCookie){
        // SELECT about user based on id
        db.flexswim.selectIndividualWorkOut(request.params.id, user_id, (error, queryResult) => {
            if (error) {
                console.error('error getting workout:', error);
                response.sendStatus(500);
            } else {
                console.log(queryResult.rows[0]);
                let data = {
                    workout: queryResult.rows[0],
                    name: username
                }
                response.render('flexswim/individualworkout', data);
            };
        });
    } else {
        response.send('wrong user!');
    }
  };


// ┌─┐┌┬┐┬┌┬┐  ┌─┐┌─┐┬─┐┌─┐┌─┐┌┐┌┌─┐┬    ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐┌─┐
// ├┤  │││ │   ├─┘├┤ ├┬┘└─┐│ ││││├─┤│    ││││ │├┬┘├┴┐│ ││ │ │ └─┐
// └─┘─┴┘┴ ┴   ┴  └─┘┴└─└─┘└─┘┘└┘┴ ┴┴─┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴ └─┘
  //for get's ('/workout/:id/edit') path//TO DO AS IT IS QUITE MESSY FOR NOW
    let editForm = (request, response) => {
      db.flexswim.selectIndividualWorkOut(request.params.id, request.cookies.userId, (error, queryResult) => {
        if (error) {
          console.error('error getting workout:', error);
          response.sendStatus(500);
        } else {
            console.log(queryResult.rows[0]);
            // response.send('can edit');
            response.render('flexswim/edit', {workout: queryResult.rows[0]});
        }
      });
  };

//for app.post's('/workout/:id') path
  let editPut = (request, response) => {
      db.flexswim.update(request.body, (error, queryResult) => {
        if (error) {
          console.error('error getting workout:', error);
          response.sendStatus(500);
        }
            if (queryResult.rows >= 0) {
                console.log('Workout updated successfully');
                console.log(queryResult.rows);
                let data = {
                newWorkOut: queryResult.rows[0]
                };
                // response.render('flexswim/show', data);
                response.redirect('/index');
            } else {
                console.log('workout could not be updated');
                response.render('flexswim/edit');
            }
      });
  };

// ┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐  ┌─┐┌─┐┬─┐┌─┐┌─┐┌┐┌┌─┐┬    ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐┌─┐
//  ││├┤ │  ├┤  │ ├┤   ├─┘├┤ ├┬┘└─┐│ ││││├─┤│    ││││ │├┬┘├┴┐│ ││ │ │ └─┐
// ─┴┘└─┘┴─┘└─┘ ┴ └─┘  ┴  └─┘┴└─└─┘└─┘┘└┘┴ ┴┴─┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴ └─┘

//for ('/logout') path
  let logout = (request, response) => {
    response.clearCookie("loggedIn");
    response.clearCookie("userId");
    response.clearCookie("username");
  //TODO response.redirect('/'), can redirect to home page or some other pages
    response.render('flexswim/logout');
};


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    landing: landing,
    index: index,
    registerForm: registerForm,
    register: register,
    loginForm: loginForm,
    login: login,
    newForm: newForm,
    new: postNewStroke,
    showIndividualWorkOut:showIndividualWorkOut,
    editForm: editForm,
    editPut: editPut,
    logout: logout
  };

};