module.exports = {
    showMenu: function(){
        var Menu = require('terminal-menu');
        var menu = Menu({width: 40, x: 0, y: 0});
        menu.reset();
        menu.write('Twitter Tool\n');
        menu.write('Made By Prappo Prince\n');
        menu.write('-------------------------\n');

        menu.add('Post Tweet');
        menu.add('Search Tweet');
        menu.add('Streaming');
        menu.add('Exit');

        menu.on('select', function (label) {
            // menu.close();
            // console.log('SELECTED: ' + label);

            switch (label) {
                case 'Exit':
                    process.exit();
                    break;
                case 'Post Tweet':
                    console.log('Post tweet');
                    break;

                default:
                    console.log('Ops');
                    process.stdin.setRawMode(false);
                    break;
            }
            if (label == 'Exit') {
                process.exit();
            }
        });
        process.stdin.pipe(menu.createStream()).pipe(process.stdout);

        process.stdin.setRawMode(true);
        menu.on('close', function () {
            process.stdin.setRawMode(false);
            process.stdin.end();
        });
    }
};