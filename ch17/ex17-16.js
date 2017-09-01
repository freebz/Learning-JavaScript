// 작은따옴표와 큰따옴표를 모두 썼으므로 백틱으로 문자열 경계를 나타냈습니다.
const html = `<img alt='A "simple" example.'>` +
      `<img alt="Don't abuse it!">`;
const matches = html.match(/<img alt=(['"]).*?\1/g);
