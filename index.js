const bcrypt = require("bcrypt");

async function hashPassword(plainPassword) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(plainPassword, salt);
  console.log("Hashed Password:", hashedPassword);
  return hashedPassword;
}

// 使用例
hashPassword("abcdef");
