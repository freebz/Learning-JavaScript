const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' +
      '<script src="stuff.js">';
const matches = html.match(/area|a|link|script|source/ig); // 첫 시도
