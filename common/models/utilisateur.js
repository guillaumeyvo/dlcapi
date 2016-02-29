module.exports = function(Utilisateur) {
    
    Utilisateur.afterRemote('create', function(context, Utilisateur, next) {
    console.log('> user.afterRemote triggered');

    var options = {
      type: 'email',
      to: Utilisateur.email,
      from: 'noreply@dlcapp.com',
      subject: 'Thanks for registering.',
      //template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      //redirect: '/verified',
      Utilisateur: Utilisateur
    };

    Utilisateur.verify(options, function(err, response) {
      if (err) return next(err);

      console.log('> verification email sent:', response);
    });
  });

};
