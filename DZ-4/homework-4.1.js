const userName = prompt("Enter your name", "");

const message = userName
    ? `Hello, ${userName}! How are you?`
    : 'Ups, you dont provide some name. Good by.';

alert(message);