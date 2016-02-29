module.exports = function(Distributeur) {
    
    Distributeur.afterRemote('create', function(context, Distributeur, next) {
    console.log('> user.afterRemote triggered');

    var options = {
      type: 'email',
      to: Distributeur.email,
      from: 'noreply@dlcapp.com',
      subject: 'Thanks for registering.',
      //template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: 'explorer/#!/dlcuser/dlcuser_find',
      Distributeur: Distributeur
    };

    Distributeur.verify(options, function(err, response) {
      if (err) return next(err);

      console.log('> verification email sent:', response);
    });
  });

};
