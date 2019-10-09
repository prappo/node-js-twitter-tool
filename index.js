var Twitter = require('twitter');
var config = require('./config');
var client = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
});



// var api_key = config.api_key;
// var domain = 'mail.trino-lab.com';
// var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
//
// var data = {
//     from: 'Twitter Notification <me@samples.mailgun.org>',
//     to: 'prappo.prince@gmail.com',
//     subject: 'Need help',
//     text: 'what do you think'
// };

// mailgun.messages().send(data, function (error, body) {
//     console.log(body);
// });

// var stream = client.stream('statuses/filter', {track: 'javascript'});
// stream.on('data', function (event) {
//     console.log(event && event.text);
// });
//
// stream.on('error', function (error) {
//     throw error;
// });
//
// // You can also get the stream in a callback if you prefer.
// client.stream('statuses/filter', {track: 'javascript'}, function (stream) {
//     stream.on('data', function (event) {
//         console.log(event.text);
//     });
//
//     stream.on('error', function (error) {
//         throw error;
//     });
// });

// var term = require( 'terminal-kit' ).terminal ;
//
// var items = [ 'File' , 'Edit' , 'View' , 'History' , 'Bookmarks' , 'Tools' , 'Help' ] ;
//
// var options = {
//     y: 1 ,	// the menu will be on the top of the terminal
//     style: term.inverse ,
//     selectedStyle: term.dim.blue.bgGreen
// } ;
//
// term.clear() ;
//
// term.singleLineMenu( items , options , function( error , response ) {
//     term( '\n' ).eraseLineAfter.green(
//         "#%s selected: %s (%s,%s)\n" ,
//         response.selectedIndex ,
//         response.selectedText ,
//         response.x ,
//         response.y
//     ) ;
//     process.exit() ;
// } ) ;

var Menu = require('terminal-menu');
var menu = Menu({ width: 29, x: 4, y: 2 });
menu.reset();
menu.write('Twitter Tool\n');
menu.write('-------------------------\n');

menu.add('Post Tweet');
menu.add('BUSINESS INTELLIGENCE');
menu.add('ACCOUNTS PAYABLE');
menu.add('LEDGER BOOKINGS');
menu.add('INDICATOR CHART METRICS');
menu.add('BACKUP DATA TO FLOPPY DISK');
menu.add('RESTORE FROM FLOPPY DISK');
menu.add('EXIT');

menu.on('select', function (label) {
    // menu.close();
    console.log('SELECTED: ' + label);

});
process.stdin.pipe(menu.createStream()).pipe(process.stdout);

process.stdin.setRawMode(true);
menu.on('close', function () {
    process.stdin.setRawMode(false);
    process.stdin.end();
});





