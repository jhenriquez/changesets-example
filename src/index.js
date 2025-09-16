/**
 * A simple example function to demonstrate changesets workflow
 * @param {string} name - The name to greet
 * @returns {string} A greeting message
 */
function greet(name) {
  return `Hello, ${name}!`;
}

// Add a silly change

module.exports = { greet };