// Export functions to index.js
const cipher = {
  encode: encryptFunction,
  decode: decryptFunction
};

// Encrypt Function
function encryptFunction(key, text) {
  let cipherText = "";

  for (let i = 0; i < text.length; i++) {
    let letterCode = text.charCodeAt(i);

    if (letterCode >= 65 && letterCode <= 90) {
      cipherText += String.fromCharCode((letterCode - 65 + key) % 26 + 65);
    } else if (letterCode >= 97 && letterCode <= 122) {
      cipherText += String.fromCharCode((letterCode - 97 + key) % 26 + 97);
    } else {
      cipherText += text[i];
    }
  }

  return cipherText;
}

// Decrypt Function
function decryptFunction(key, text) {
  let cipherText = "";

  for (let i = 0; i < text.length; i++) {
    let letterCode = text.charCodeAt(i);

    if (letterCode >= 65 && letterCode <= 90) {
      cipherText += String.fromCharCode((letterCode - 65 - key) % 26 + 65);
    } else if (letterCode >= 97 && letterCode <= 122) {
      cipherText += String.fromCharCode((letterCode - 97 - key) % 26 + 97);
    } else {
      cipherText += text[i];
    }
  }

  console.log(cipherText);
  return cipherText;
}

decryptFunction(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG');

// Export functions to index.js
export default cipher;













