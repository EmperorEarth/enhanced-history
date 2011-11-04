// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

//chk if an object is an array or not.
function isArray(obj) {
  if (obj.constructor.toString().indexOf('Array') == -1)
    return false;
  else
    return true;
}

function stringToBool(string) {
  return (string == 'true' ? true : false);
}

function boolToString(bool) {
  return (bool ? 'true' : 'false');
}

String.prototype.toCamel = function(){
  return this.replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
};

function pageTitle(title) {
  element = $('<div/>');
  document.title = 'BH - ' + $(element).html(title).text();
}
