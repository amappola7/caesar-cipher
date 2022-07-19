// Export functions to index.js
const cipher = {
  encode: encryptFunction,
  decode: decryptFunction
};

// Encrypt Function
function encryptFunction(key, text) {
  let cipherText = [];

  for (let i = 0; i < text.length; i++) {
    let letterCode = text.charCodeAt(i);
    let cipherLetter;
    let cipherCode;

    if (letterCode >= 65 && letterCode <= 90) {

      cipherCode = (letterCode - 65 + key) % 26 + 65;
      cipherLetter = String.fromCharCode(cipherCode);
      cipherText.push(cipherLetter);

    } else if (letterCode >= 97 && letterCode <= 122) {

      cipherCode = (letterCode - 97 + key) % 26 + 97;
      cipherLetter = String.fromCharCode(cipherCode);
      cipherText.push(cipherLetter);

    } else {

      cipherText.push(text[i]);

    }

  };
  return cipherText.join("");
}

// Decrypt Function
function decryptFunction(key, text) {
}

// Export functions to index.js
export default cipher;













