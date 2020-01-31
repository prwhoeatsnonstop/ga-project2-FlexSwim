/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
 //must npm install js-sha256 and use it here
var sha256 = require('js-sha256');
const SALT = "saltprotector";
const moment = require('moment');


module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
//suppose to be listing for all users
  let getAll = (callback) => {

    let query = 'SELECT id, name FROM users';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      } else {

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        } else {
          callback(null, null);

        }
      }
    });
  };

  let register = (user, callback) => {
    // set up query
    //hashing the password
    let hashedPw = sha256(user.password + SALT);
    let values = [user.name, hashedPw];
    let queryString = 'INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *';
    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                console.error('error');
            } else
            callback(null, queryResult);
    });
  };

    let login = (user, callback) => {
    // set up query
    console.log(user);
    let values = [user.name];
    let queryString = 'SELECT * FROM users WHERE name=$1';
    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                console.error('error');
            } else
            callback(null, queryResult);
            console.log(queryResult);
    });
  };


// ┌─┐┌┬┐┌┬┐  ┌─┐┌─┐┬─┐┌─┐┌─┐┌┐┌┌─┐┬    ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐
// ├─┤ ││ ││  ├─┘├┤ ├┬┘└─┐│ ││││├─┤│    ││││ │├┬┘├┴┐│ ││ │ │
// ┴ ┴─┴┘─┴┘  ┴  └─┘┴└─└─┘└─┘┘└┘┴ ┴┴─┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴
    let newWorkOut = (workout, callback) => {
    // set up query
    // console.log(workout);
    let queryString = 'INSERT INTO personal_strokes (stroke_type, distance, duration, user_id, done, date_created) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    let values = [workout.stroke, workout.distance, workout.duration, workout.userId, false, moment().format('LLLL')];
    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                console.error('error');
            } else
            callback(null, queryResult);
    });
  };


  //   let show = (user, callback) => {
  //   // set up query
  //   let hashedPw = sha256(user.password + SALT);
  //   let values = [user];
  //   let queryString = 'SELECT * FROM tweets WHERE user_id=$1';
  //   // execute query
  //   dbPoolInstance.query(queryString, values, (error, queryResult) => {
  //           callback(error, queryResult);
  //   });
  // };

  return {
    getAll: getAll,
    register: register,
    login: login,
    newWorkOut: newWorkOut
    // newTweet: newTweet,
    // show: show
  };
};