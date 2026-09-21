// Very small demo auth layer using localStorage.
// NOTE: this is client-side only and not secure — fine for a learning
// project, not for a real store. A real app needs a server to check
// passwords and issue sessions.

const AUTH_KEY = "bookstore_user";
const USERS_KEY = "bookstore_users";

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "{}");
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function registerUser(username, password) {
  const users = getUsers();
  if (users[username]) return { ok: false, message: "That username is already taken." };
  users[username] = password;
  saveUsers(users);
  return { ok: true };
}

function loginUser(username, password) {
  const users = getUsers();
  if (!users[username]) return { ok: false, message: "No account with that username yet." };
  if (users[username] !== password) return { ok: false, message: "Incorrect password." };
  localStorage.setItem(AUTH_KEY, username);
  return { ok: true };
}

function currentUser() {
  return localStorage.getItem(AUTH_KEY);
}

function logoutUser() {
  localStorage.removeItem(AUTH_KEY);
  window.location.href = "login.html";
}

// Call at the top of any protected page.
function requireAuth() {
  if (!currentUser()) {
    window.location.href = "login.html";
  }
}
