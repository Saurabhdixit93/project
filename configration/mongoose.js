const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/password-generator-form');
  console.log('Yup ! : MongoDB connected Successfully ');
}