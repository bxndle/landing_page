var postmark = require('postmark');

module.exports.send = function(req, res) {
  var client = new postmark.Client('a241e82a-c8f7-47dd-90a1-42da55888cd2');

  client.sendEmail({
      'From': 'mihai@joinbundle.com',
      'To': 'mihai@joinbundle.com',
      'Subject': '[subscription] [new]',
      'TextBody': '[' + req.body.email + '] has subscribed to the mailing list.'
    },
    function(error, result) {
      if(error) {
        res.status(400).send('Unable to send via postmark: ' + error.message);
      } else {
        res.status(200).send('working');
      }
    });

};
