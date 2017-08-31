const moment = require('moment-timezone');

let m = moment();	   // 현재
m.add(3, 'days');	   // m은 이제 3일 뒤입니다.
m.subtract(2, 'years');    // m은 이제 2년 전으로부터 3일이 지난 날짜입니다.

m = moment();		   // 리셋
m.startOf('year');	   // m은 이제 올해의 1월 1일입니다.
m.endOf('month');	   // m은 이제 올해의 1월 31일입니다.
