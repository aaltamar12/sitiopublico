const crypto = require("crypto");

const secretKey = process.env.SECRET_KEY;
const iv = process.env.IV_KEY;
const algorithm = "aes-256-cbc";

const encryptData = (data) => {
  // Crear un objeto de cifrado
  const cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(secretKey),
    Buffer.from(iv, "hex")
  );

  // Cifrar los datos
  let encryptedData = cipher.update(data, "utf8", "hex");
  encryptedData += cipher.final("hex");

  return encryptedData;
};

const decryptData = (encryptedData) => {
  // Crear un objeto de descifrado
  const decoder = crypto.createDecipheriv(
    algorithm,
    Buffer.from(secretKey),
    Buffer.from(iv, "hex")
  );
  // Descifrar los datos
  let decodedData = decoder.update(encryptedData, "hex", "utf8");
  decodedData += decoder.final("utf8");

  return decodedData;
};

module.exports = { encryptData, decryptData };
