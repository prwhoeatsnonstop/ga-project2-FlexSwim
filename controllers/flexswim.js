 //must npm install js-sha256 and use it here
var sha256 = require('js-sha256');
const SALT = "saltprotector";

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

//for ('/home') path and getting info from getAll in models
  let landingControllerCallback = (request, response) => {
        response.render('flexswim/landing');
  };

  let indexControllerCallback = (request, response) => {
    let username = request.cookies.username;
        let data = {
            selectedUser: username
        }
        response.render('flexswim/index', data);
  };

//for get's ('/register') path
  let registerFormControllerCallback = (request, response) => {
    response.render('flexswim/register');
    // response.send('wana register?');
  };

//for post's ('register') path
  let registerControllerCallback = (request, response) => {
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
            //'username's value is undefined, able to register and redirect to homepage d but not able to add value to 'username's in cookie yet
            response.cookie('username', username.rows[0].name);
            response.cookie('loggedIn', hashedUser);
            response.cookie('userId', user_id);
            response.redirect('/index');
        } else {
          console.log('User could not be created');
        }
        });
};

//for get's ('/login') path
  let loginFormControllerCallback = (request, response) => {
    response.render('flexswim/login');
  };

//for post's ('login') path
  let loginControllerCallback = (request, response) => {
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
                            response.redirect('/index');
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

  //for get's ('/new') path
  let newFormControllerCallback = (request, response) => {
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
        response.send('wrong');
    }
  };

//for app.post's('/new') path
  let newControllerCallback = (request, response) => {
      // use newWorkOut model method `create` to create new workout entry in db
      db.flexswim.newWorkOut(request.body, (error, queryResult) => {
        // (console log it to see for yourself)
        if (error) {
          console.error('error getting workout:', error);
          response.sendStatus(500);
        }
            if (queryResult.rowCount >= 1) {
                console.log('Workout created successfully');
                // redirect to home page after creation
                // console.log(request.body);
                console.log(queryResult.rows[0]);
                //curious as to why it could not print out from queryResult instead? but using request.body, it successfully printed out, probably did smth wrong
                let data = {
                newWorkOut: queryResult.rows[0]
                };
                // console.log(data);
                // response.render('flexswim/show', data);
                response.redirect('/index');
            } else {
                console.log('workout could not be created');
                response.render('flexswim/new');
            }
      });
  };

// //for app.get's ('/') path
//   let showControllerCallback = (request, response) => {
//     let user_id = request.cookies.userId;
//       db.flexswim.show(user_id,(error, allTweetsOfSelectedUser) => {
//         console.log(user_id);
//         console.log(allTweetsOfSelectedUser);
//         let data = {
//             allTweetsOfSelectedUser: allTweetsOfSelectedUser.rows
//         }
//         response.render('flexswim/show', data);
//       });
//   };

// //for ('/follower') path to that will lead user to a page where they can select which user to follow
//   let followerFormControllerCallback = (request, response) => {
//       db.flexswim.getAll((error, allUsers) => {
//         //allUsers is array of objects [
// //   { id: 1, name: 'nick' },
// //   { id: 2, name: 'joe' },
// //   { id: 3, name: 'mel' },
// //   { id: 4, name: 'fay' },
// //   { id: 5, name: 'alex' },
// //   { id: 6, name: 'mich' }
// // ]. How to convert it into an object?
// //https://stackoverflow.com/questions/50674289/converting-array-of-objects-into-a-single-object
//         console.log(allUsers);
//         // const input = allUsers;
//         //     const output = input.reduce((a, obj) => {
//         //         a[obj.id] = obj;
//         //         return a;
//         //         }, {});
//         //     console.log(output);
//         //     let data = {
//         //     allUsers: output
//         //     }
//         response.render('flexswim/newFollowerForm', {allUsers: allUsers});
//       });
//   };

//for ('/logout') path
  let logoutControllerCallback = (request, response) => {
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
    landing: landingControllerCallback,
    index: indexControllerCallback,
    registerForm: registerFormControllerCallback,
    register: registerControllerCallback,
    loginForm: loginFormControllerCallback,
    login: loginControllerCallback,
    newForm: newFormControllerCallback,
    new: newControllerCallback,
    // show: showControllerCallback,
    // followerForm: followerFormControllerCallback,
    logout: logoutControllerCallback
  };

};