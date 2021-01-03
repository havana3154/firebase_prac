// Set the configuration for your app
  // TODO: Replace with your project's config object
  var firebase = require('firebase/app')
  require('firebase/auth')
  require('firebase/database')

  var firebaseConfig = {
    apiKey: "AIzaSyCw6jVUE1i8Vhusw9OLkmbILmQMH--SXsw",
    authDomain: "ssamteamprac.firebaseapp.com",
    databaseURL: "https://ssamteamprac-default-rtdb.firebaseio.com",
    projectId: "ssamteamprac",
    storageBucket: "ssamteamprac.appspot.com",
    messagingSenderId: "632593482260",
    appId: "1:632593482260:web:0edcc8594c0cfaaef21d01"
  }

  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  var database = firebase.database();

  function writeUserData(userId, name, email) {
    database.ref('users/' + userId).set({
      username: name,
      email: email,
    });
  }
  userId = 'lee'
  name = 'hangu'
  email = 'havana'

  function writeNewPost(uid, username, title, body) {
    // A post entry.
    var postData = {
      author: username,
      uid: uid,
      body: body,
      title: title,
      starCount: 0,
    }
  
    // Get a key for a new Post.
    var docroot = database.ref('posts')
    var newPostKey = firebase.database().ref().child('posts').push('name = leee').key    //push(), key 가 무슨 역할을 하는걸까?
    docroot.on('child_added', function(data){
      console.log(data.val())
    })

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);
  }


uid = 'aaa'
username = 'bbb'
title = 'ccc'
body = 'ddd'

writeUserData(userId,name,email)
writeNewPost(uid, username, title, body)
