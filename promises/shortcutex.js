Parse.User.logIn('user', 'pass')
  .then((query) => {
    query.find()
      .then((results) => {
        results[0].save({ key: value })
          .then((result) => {
            // the object was saved
          });
      });
  });
