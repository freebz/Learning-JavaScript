const moment = require('moment-timezone');

moment().subtract(10, 'seconds').fromNow(); // a few seconds ago
moment().subtract(44, 'seconds').fromNow(); // a few seconds ago
moment().subtract(45, 'seconds').fromNow(); // a minuteago
moment().subtract(5, 'minutes').fromNow(); // a 5 minutes ago
moment().subtract(44, 'minutes').fromNow(); // a 44 minutes ago
moment().subtract(45, 'minutes').fromNow(); // an hour ago
moment().subtract(5, 'hours').fromNow(); // 4 hours ago
moment().subtract(21, 'hours').fromNow(); // 21 hours ago
moment().subtract(22, 'hours').fromNow(); // a day ago
moment().subtract(300, 'days').fromNow(); // 10 months ago
moment().subtract(345, 'days').fromNow(); // a year ago
