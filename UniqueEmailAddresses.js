/** 929
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
  var map = {};
  for (var i = 0; i < emails.length; i++) {
      let [local, domain] = emails[i].split('@');
      local = local.split('+')[0].split('.').join('');
      map[local + '@' + domain] = true;
  }
  return Object.keys(map).length;
};