import cipher from './cipher.js';

// Selectors
const welcomeScreen = document.querySelector(".welcome-screen"); // Welcome screen
const enterButton1 = document.querySelector(".enter-button-1"); // Welcome screen - Enter button
const encryptChat = document.querySelector(".welcome-screen__encrypt-chat-container"); // Encrypt chat box container
const getKeyValueInput = document.querySelector("#keyValue"); // Key value to encrypt
const enterButton2 = document.querySelector(".enter-button-2"); // Button after encrypt section
const headerChat = document.querySelector("header"); // Main chat - Header
const mainChat = document.querySelector("main"); // Main chat - Main section
const getUserMessage = document.querySelector("#getUserMessage"); // Text input - Get message
const enterUserMessage = document.querySelector(".enter-user-message"); // Enter message button
const userMessageContainter = document.querySelector(".main-user-message__container"); // User message container
const userMessage = document.querySelector(".main-user-message__text"); // User message
const footerChat = document.querySelector("footer"); // Main chat - Footer
const decryptButton = document.querySelector(".header__decrypt-button"); // Decrypt chat button
const decryptScreen = document.querySelector(".decrypt-chat__screen"); // Decrypt chat screen
const decryptChatBox = document.querySelector(".decrypt-chat__container"); // Decrypt chat box container
const getDecryptKeyValueInput = document.querySelector("#keyValueDecrypt"); // Key value to decrypt
const exitButton = document.querySelector(".exit-button"); // Button to exit decrypt chat screen
const enterKeyButton = document.querySelector(".decrypt-chat__enter-key-button"); // Enter key button to decrypt chat
// const newUserMessageContainer = document.createElement("div.main-user-message__container"); // Create new messages

// Values
let encryptKeyValue;
let decryptKeyValue;
let newUserMessage;
let encryptedUserMessage;
let decryptedUserMessage;

// Initial State
encryptChat.style.display = "none";
headerChat.style.display = "none";
mainChat.style.display = "none";
footerChat.style.display = "none";
decryptScreen.style.display = "none";
decryptChatBox.style.display = "none";

// Enter to encrypt chat section
function showEncryptChatBox (){
    enterButton1.style.display = "none";
    encryptChat.style.display = "";
    getKeyValueInput.value = "";
}

enterButton1.addEventListener("click", showEncryptChatBox);

// Save key value - Show main chat section
function saveKeyValue (event) {
    encryptKeyValue = getKeyValueInput.value;
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
    encryptKeyValue = parseInt(getKeyValueInput.value);
    newUserMessage = getUserMessage.value;
    encryptedUserMessage = cipher.encode(encryptKeyValue, newUserMessage);
    userMessage.innerHTML = encryptedUserMessage;
    getUserMessage.value = "";

    event.preventDefault();
}

enterUserMessage.addEventListener("click", showEncryptUserMessage);

// Show Decrypt Chat Screen
function showDecryptScreen (event) {
    decryptScreen.style.display = "";
    decryptChatBox.style.display = "";
    event.preventDefault();
    decryptButton.style.display = "none";
}

decryptButton.addEventListener("click", showDecryptScreen);

// Hide Decrypt Chat Screen
function hideDecryptChatScreen() {
    decryptScreen.style.display = "none";
    decryptChatBox.style.display = "none";
    decryptButton.style.display = "";
}

exitButton.addEventListener("click", hideDecryptChatScreen);

// Evaluate key values to decrypt
function saveDecryptKeyValue(event) {
    encryptKeyValue = parseInt(getKeyValueInput.value);
    decryptKeyValue = parseInt(getDecryptKeyValueInput.value);

    if (decryptKeyValue === encryptKeyValue) {
        decryptScreen.style.display = "none";
        decryptChatBox.style.display = "none";
        decryptedUserMessage = cipher.decode(decryptKeyValue, encryptedUserMessage);
        userMessage.innerHTML = decryptedUserMessage;
        getDecryptKeyValueInput.value = "";
    } else {
        alert("Keys don't match");
        getDecryptKeyValueInput.value = "";
    }

    decryptButton.style.display = "";
    event.preventDefault();
}

enterKeyButton.addEventListener("click", saveDecryptKeyValue);