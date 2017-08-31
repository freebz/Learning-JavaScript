const moment = require('moment-timezone');

let m = moment()
    .add(10, 'hours')
    .subtract(3, 'days')
    .endOf('month');
// m 은 이제 3일 전으로부터 10시간 뒤인 달의 마지막 순간입니다.
