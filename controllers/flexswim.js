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
    console.log('hello');
        response.render('flexswim/login');
  };

//SHOWS ALL WORKOUTS FOR CURRENT USER OR NOWORKOUTYET PAGE (FOR NEW USER AND THOSE WHO HAVE YET TO CREATE WORKOUTS)
  // let index = (request, response) => {
  //       let userId = request.cookies.userId;
  //       db.flexswim.showAll(userId, (error, queryResult) => {
  //       if (error) {
  //         console.error('error getting workout:', error);
  //         response.sendStatus(500);
  //       }
  //           if (queryResult.rowCount >= 1) {
  //               console.log('able to show');
  //               console.log(queryResult.rows);
  //               let username = request.cookies.username;
  //               let data = {
  //               userId: userId,
  //               username: username,
  //               show: queryResult.rows
  //               };
  //               response.render('flexswim/index', data);
  //           } else {
  //               console.log('not able to show');
  //               //DECIDE WHAT TO RENDER IF GOT ERROR GOING TO INDEX PAGE
  //               response.render('flexswim/noworkoutyet', {username: request.cookies.username});
  //           }
  //     });
  // };

    let index = (request, response) => {
  // check to see if a user is logged in
    let user_id = request.cookies.userId;
    let username = request.cookies.username;
    let hashedCookie = sha256(user_id + SALT);
    let data = {
        user_id: user_id,
        username: username
    }
    if (request.cookies.loggedIn === hashedCookie){

        db.flexswim.showAll(user_id, (error, queryResult) => {
        if (error) {
          console.error('error getting workout:', error);
          response.sendStatus(500);
        }
            if (queryResult.rowCount >= 1) {
                console.log('able to show');
                console.log(queryResult.rows);
                let username = request.cookies.username;
                let data = {
                userId: user_id,
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
    } else {
        response.send('You do not have access to the content!');
    }
  };

//FOR GET'S ('/REGISTER') PATH
  let registerForm = (request, response) => {
    response.render('flexswim/register');
  };


  let register = (request, response) => {

    db.flexswim.checkUser(request.body, (error, result) => {
        if (error) {
            console.log("error yayayaya");
            response.status(404).send('error', error);
        } if (result !== null) {
            console.log('Error coz same username');
            response.render('flexswim/duplicateuser');
            // response.send("Username has been taken, create a new one!")
        } else {
            db.flexswim.register(request.body, (error, username) => {
                console.log(username);
                if (error) {
                    console.log("Error after register");
                    response.status(404).send('error', error);
                }
                    if (username.rowCount = 1) {
                        let user_id = username.id;
                        let hashedUser = sha256(user_id+SALT);
                        response.cookie('username', username.name);
                        response.cookie('loggedIn', hashedUser);
                        response.cookie('userId', user_id);
                        response.redirect('/home');
                    }
                    else {
                        console.log('User could not be created');
                        // response.render('/')
                        response.send('Username has been taken, pick a new username');
                    }
        });
        }
    })
};


//FOR GET'S ('/LOGIN') PATH
  let loginForm = (request, response) => {
    response.render('flexswim/login');
  };



  let login = (request, response) => {

    db.flexswim.checkUser(request.body, (error, result) => {
        if (error) {
            console.log("error yayayaya");
            response.status(404).send('error', error);
        }   if (result === null) {
            response.render('flexswim/wrongusername');
            // response.send('Not such user!');
        } else if (result.name === request.body.name && result.password === sha256(request.body.password + SALT)) {
                console.log(result);
                let user_id = result.id;
                let hashedUser = sha256(user_id+SALT);
                response.cookie('username', result.name);
                response.cookie('loggedIn', hashedUser);
                response.cookie('userId', user_id);
                response.redirect('/home');
            } else {
                console.log('Wrong password!');
                response.render('flexswim/wrongpassword');
                // response.send('Wrong password!');
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
        response.send('You do not have access to the content!');
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
                response.redirect('/show');
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
    if (request.cookies.loggedIn === hashedCookie) {
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
                response.render('flexswim/delete', data);
            };
        });
    } else {
        response.send('You do not have access to the content!');
    }
  };


// ┌─┐┌┬┐┬┌┬┐  ┌─┐┌─┐┬─┐┌─┐┌─┐┌┐┌┌─┐┬    ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐┌─┐
// ├┤  │││ │   ├─┘├┤ ├┬┘└─┐│ ││││├─┤│    ││││ │├┬┘├┴┐│ ││ │ │ └─┐
// └─┘─┴┘┴ ┴   ┴  └─┘┴└─└─┘└─┘┘└┘┴ ┴┴─┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴ └─┘
  let editForm = (request, response) => {
        let userId = request.cookies.userId;
        db.flexswim.selectIndividualWorkOut(request.params.id, userId, (error, queryResult) => {
        if (error) {
          console.error('error getting workout:', error);
          response.sendStatus(500);
        }
            if (queryResult.rowCount >= 1) {
                console.log('able to show');
                console.log(queryResult.rows[0]);
                let username = request.cookies.username;
                let data = {
                userId: userId,
                username: username,
                id: request.params.id,
                workout: queryResult.rows[0]
                };
                response.render('flexswim/edit', data);
            } else {
                console.log('not able to show');
                //DECIDE WHAT TO RENDER IF GOT ERROR GOING TO INDEX PAGE
                response.send('Something is wrong with edit form! Developer please check path!');
            }
      });
  };

//for app.post's('/workout/:id') path
  let editPut = (request, response) => {
        let userId = request.cookies.userId;
      db.flexswim.updateWorkOut(request.body, userId, (error, queryResult) => {
        if (error) {
          console.error('error getting workout:', error);
          response.sendStatus(500);
        }   else {
                console.log('Workout updated successfully');
                console.log(queryResult);
                response.redirect('/show');
        }

      });
  };

// ┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐  ┌─┐┌─┐┬─┐┌─┐┌─┐┌┐┌┌─┐┬    ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐┌─┐
//  ││├┤ │  ├┤  │ ├┤   ├─┘├┤ ├┬┘└─┐│ ││││├─┤│    ││││ │├┬┘├┴┐│ ││ │ │ └─┐
// ─┴┘└─┘┴─┘└─┘ ┴ └─┘  ┴  └─┘┴└─└─┘└─┘┘└┘┴ ┴┴─┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴ └─┘

  let deleteWorkOut = (request, response) => {
  // check to see if a user is logged in
    let user_id = request.cookies.userId;
    let username = request.cookies.username;
    let hashedCookie = sha256(user_id + SALT);
    let data = {
        user_id: user_id,
        username: username
    }
    if (request.cookies.loggedIn === hashedCookie){
        db.flexswim.deleteWorkOut(request.params.id, user_id, (error, queryResult) => {
            if (error) {
                console.error('error getting workout:', error);
                response.sendStatus(500);
            } else {
                console.log('Workout deleted successfully');
                console.log(queryResult);
                response.redirect('/show');
            }
        });
    } else {
        response.send('wrong user!');
    }
  };


//FOR DONE PATH
  let doneWorkOut = (request, response) => {
  // check to see if a user is logged in
    let user_id = request.cookies.userId;
    let username = request.cookies.username;
    let hashedCookie = sha256(user_id + SALT);
    let data = {
        user_id: user_id,
        username: username
    }
    if (request.cookies.loggedIn === hashedCookie){
        db.flexswim.doneWorkOut(request.params.id, user_id, (error, queryResult) => {
            if (error) {
                console.error('error getting workout:', error);
                response.sendStatus(500);
            } else {
                console.log('Workout done!');
                console.log(queryResult);
                response.redirect('/show');
            }
        });
    } else {
        response.send('wrong user!');
    }
  };

//FOR HOME PATH
  let home = (request, response) => {
        let name = request.cookies.username;
        response.render('flexswim/home', {name: name});
  };


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
    deleteWorkOut: deleteWorkOut,
    logout: logout,
    doneWorkOut: doneWorkOut,
    home: home
  };

};