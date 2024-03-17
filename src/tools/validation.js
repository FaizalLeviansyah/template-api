const xss = require('xss');

exports.email = str => {
  return str == '' ||
    str.length < 2 ||
    str == undefined ||
    (str && typeof str !== 'string') ||
    (str &&
      !/^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
        str
      ))
    ? 'Invalid input email'
    : true;
};

exports.username = str => {
  return str == '' ||
    str.length < 2 ||
    str == undefined ||
    (str && typeof str !== 'string') ||
    (str && / /g).test(str) ||
    (str && str.length > 50)
    ? 'Invalid input username'
    : true;
};

exports.password = str => {
  return str == '' ||
    str.length < 8 ||
    str == undefined ||
    (str && typeof str !== 'string') ||
    (str && / /g).test(str) ||
    (str && str.length > 50) ||
    str.search(/\d/) == -1 ||
    str.search(/[a-zA-Z]/) == -1
    ? 'Invalid input password'
    : true;
};

exports.xss = str => {
  let filter = xss(str);

  return filter;
};