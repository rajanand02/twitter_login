if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to twitter_login.";
  };
  Template.content.users = function () {
    return Meteor.users.find();
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
