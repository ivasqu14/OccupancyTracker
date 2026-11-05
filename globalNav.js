var wrap = document.getElementById('pfdWrap');
var trigger = document.getElementById('pfdTrigger');
var menu = document.getElementById('pfdMenu');

function open() { wrap.classList.add('open'); trigger.setAttribute('aria-expanded', 'true'); }
function close() { wrap.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); }

trigger.addEventListener('click', function () {
  wrap.classList.contains('open') ? close() : open();
});

// Close on outside click and on Escape (returning focus to the trigger).
document.addEventListener('click', function (e) {
  if (!wrap.contains(e.target)) close();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && wrap.classList.contains('open')) { close(); trigger.focus(); }
});

// Basic arrow-key navigation through the menu items.
menu.addEventListener('keydown', function (e) {
  var items = Array.prototype.slice.call(menu.querySelectorAll('a, button'));
  var i = items.indexOf(document.activeElement);
  if (e.key === 'ArrowDown') { e.preventDefault(); (items[i + 1] || items[0]).focus(); }
  if (e.key === 'ArrowUp') { e.preventDefault(); (items[i - 1] || items[items.length - 1]).focus(); }
});

// user signing in and settings not developed so clicking sign-in shows a test user account for now
document.getElementById("avatar").style.display = "none";
document.getElementById("profile_drop").style.display = "none";
document.getElementById("events_drop").style.display = "none";
document.getElementById("settings_drop").style.display = "none";
document.getElementById("signout").style.display = "none";
signin = document.getElementById("signin")

signin.addEventListener('click', function () {
  document.getElementById("avatar").style.display = "flex";
  document.getElementById("profile_drop").style.display = "flex";
  document.getElementById("events_drop").style.display = "flex";
  document.getElementById("settings_drop").style.display = "flex";
  document.getElementById("signout").style.display = "flex";
  document.getElementById("signin").style.display = "none";
  document.getElementById("username").textContent = "testuser"
  document.getElementById("username_drop").textContent = "testuser"
  document.getElementById("e_mail").textContent = "test@test.com"
});