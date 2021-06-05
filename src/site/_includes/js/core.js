// simple button click event handler
// eslint-disable-next-line no-unused-vars
function btnHandler(selector, callback) {
  var btn = document.querySelector(selector);
  if (!btn) {
    return;
  }
  btn.addEventListener(
    "click",
    event => {
      event.preventDefault();
      callback();
    },
    false
  );
}
