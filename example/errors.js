function test() {
    // Ident error
}

// Unused variable error
var bip = "qoutes error";

// No semicolon
var foo = ['test']

// Console log error
console.log(foo);

// Invalid typeof
if (typeof test !== "func") {
  // warn
}



// Function in for loop error
for (var i=10; i; i--) {
  (function() { return i; })();
}

function callbackTest(err, callback) {
  if (err) {
    // Missing return
    callback(err);
  }

  callback();
}

callbackTest(null, function(err) {
  // not handling error
});
