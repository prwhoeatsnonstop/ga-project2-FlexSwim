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
  let getAllUsers = (callback) => {

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
    let queryString = 'INSERT INTO personal_strokes (stroke_type, distance, duration, user_id, done, date_created) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    let values = [workout.stroke, workout.distance, workout.duration, workout.userId, false, moment().format('LLLL')];
    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                console.error('error');
            } else
                queryResult.date_formatted = moment(queryResult.date_created).fromNow();
                callback(null, queryResult);
    });
  };

//SHOW ALL WORKOUTS OF CURRENT USER (FOR INDEX IN CONTROLLER)
  let showAll = (user, callback) => {
    let values = [user];
    let queryString = 'SELECT * FROM personal_strokes WHERE user_id=$1';
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                console.error('error');
            } else
            callback(null, queryResult);
    });
  };

//SHOW INDIVIDUAL WORKOUT OF CURRENT USER
  let selectIndividualWorkOut = (workOut, user, callback) => {
    let values = [workOut, user];
    console.log(workOut, user)
    let queryString = 'SELECT personal_strokes.id, personal_strokes.stroke_type, users.name, personal_strokes.distance, personal_strokes.duration, personal_strokes.user_id, personal_strokes.date_created FROM personal_strokes INNER JOIN users ON personal_strokes.user_id = users.id WHERE personal_strokes.id=$1 AND users.id=$2;';
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
        if (error) {
            console.error('error');
        } else
            queryResult.date_formatted = moment(queryResult.date_created).fromNow();
            callback(null, queryResult);
    });
  };


// ┌─┐┌┬┐┬┌┬┐  ┌─┐┌─┐┬─┐┌─┐┌─┐┌┐┌┌─┐┬    ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐┌─┐
// ├┤  │││ │   ├─┘├┤ ├┬┘└─┐│ ││││├─┤│    ││││ │├┬┘├┴┐│ ││ │ │ └─┐
// └─┘─┴┘┴ ┴   ┴  └─┘┴└─└─┘└─┘┘└┘┴ ┴┴─┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴ └─┘
// UPDATE students SET email='bobby@example.com' WHERE name = 'Bob Jones';
    let update = (workout, user, callback) => {
        // UPDATE movies SET title='minion', description='cartoon'  WHERE id = 1;
    let queryString = 'UPDATE personal_strokes SET stroke_type=$1, distance=$2, duration=$3, date_created=$4 WHERE id=$5 AND user_id=$6 RETURNING *';
    let values = [workout.stroke, workout.distance, workout.duration, moment().format('LLLL'), workout.id, user.id];
    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                console.error('error');
            } else
            callback(null, null, queryResult);
    });
  };

// ┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐  ┌─┐┌─┐┬─┐┌─┐┌─┐┌┐┌┌─┐┬    ┬ ┬┌─┐┬─┐┬┌─┌─┐┬ ┬┌┬┐┌─┐
//  ││├┤ │  ├┤  │ ├┤   ├─┘├┤ ├┬┘└─┐│ ││││├─┤│    ││││ │├┬┘├┴┐│ ││ │ │ └─┐
// ─┴┘└─┘┴─┘└─┘ ┴ └─┘  ┴  └─┘┴└─└─┘└─┘┘└┘┴ ┴┴─┘  └┴┘└─┘┴└─┴ ┴└─┘└─┘ ┴ └─┘

  return {
    getAllUsers: getAllUsers,
    register: register,
    login: login,
    newWorkOut: newWorkOut,
    showAll: showAll,
    selectIndividualWorkOut: selectIndividualWorkOut,
    update: update
  };
};