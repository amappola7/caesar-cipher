// Export functions to index.js
const cipher = {
  encode: encryptFunction,
  decode: decryptFunction
};

// Encrypt Function
function encryptFunction(key, text) {
  if (!key || !text){
    throw new TypeError("Enter valid arguments");
  }

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
  if (!key || !text){
    throw new TypeError("Enter valid arguments");
  }

  let cipherText = "";

  for (let i = 0; i < text.length; i++) {
    let letterCode = text.charCodeAt(i);

    if (letterCode >= 65 && letterCode <= 90) {
      let encryptCode = (letterCode - 65 - key) % 26;

      if (encryptCode < 0) {
        encryptCode = encryptCode + 65 + 26;
        cipherText += String.fromCharCode(encryptCode);
      } else {
        encryptCode += 65;
        cipherText += String.fromCharCode(encryptCode);
      }

    } else if (letterCode >= 97 && letterCode <= 122) {
      let encryptCode = (letterCode - 97 - key) % 26;

      if (encryptCode < 0) {
        encryptCode = encryptCode + 97 + 26;
        cipherText += String.fromCharCode(encryptCode);
      } else {
        encryptCode += 97;
        cipherText += String.fromCharCode(encryptCode);
      }

    } else {
      cipherText += text[i];
    }
  }

  return cipherText;
}

// Export functions to index.js
export default cipher;











