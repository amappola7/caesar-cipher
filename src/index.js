// import cipher from './cipher.js';

// Selectors
const welcomeScreen = document.querySelector(".welcome-screen"); // Welcome screen
const enterButton1 = document.querySelector(".enter-button-1"); // Welcome screen - Enter button
const encryptChat = document.querySelector(".welcome-screen__encrypt-chat-container"); // Encrypt chat box container
const getKeyValueInput = document.querySelector("#keyValue"); // Number input - Get key input
const enterButton2 = document.querySelector(".enter-button-2"); // Button after encrypt section
const headerChat = document.querySelector("header"); // Main chat - Header
const mainChat = document.querySelector("main"); // Main chat - Main section
const getUserMessage = document.querySelector("#getUserMessage"); // Text input - Get message
const enterUserMessage = document.querySelector(".enter-user-message"); // Enter message button
const userMessageContainter = document.querySelector(".main-user-message__container"); // User message container
const userMessage = document.querySelector(".main-user-message__text"); // User message
const footerChat = document.querySelector("footer"); // Main chat - Footer
const decryptScreen = document.querySelector(".decrypt-chat__screen"); // Decrypt chat mask
const decryptChat = document.querySelector(".decrypt-chat__container"); // Decrypt chat box container

// Values
let keyValue;
let decryptedUserMessage;

// Initial State
encryptChat.style.display = "none";
headerChat.style.display = "none";
mainChat.style.display = "none";
footerChat.style.display = "none";
decryptScreen.style.display = "none";
decryptChat.style.display = "none";

// Enter to encrypt chat section
function showEncryptChatBox (){
    enterButton1.style.display = "none";
    encryptChat.style.display = "";
}

enterButton1.addEventListener("click", showEncryptChatBox);

// Save key value - Show main chat section
function saveKeyValue (event) {
    keyValue = getKeyValueInput.value;
    welcomeScreen.style.display = "none";
    userMessageContainter.style.display = "none";
    headerChat.style.display = "";
    mainChat.style.display = "";
    footerChat.style.display = "";

    event.preventDefault();
}

enterButton2.addEventListener("click", saveKeyValue);

// User message
function showEncryptUserMessage (event) {
    userMessageContainter.style.display = "";
    decryptedUserMessage = getUserMessage.value;
    userMessage.innerHTML = decryptedUserMessage;
    getUserMessage.value = "";

    event.preventDefault();
}

enterUserMessage.addEventListener("click", showEncryptUserMessage);

