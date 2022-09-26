const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1/tarot');
const Schema = mongoose.Schema;
const entrySchema = new Schema({
    user: String,
    title: String,
    summary: String,
    createdAt: Date,
    card: Object,
})

const userSchema = new Schema({
  user: String,
  pass: String,
})

const User = mongoose.model('User', userSchema);
const Entry = mongoose.model('Entry', entrySchema);

const insert = async (entryObject) => {
  const newEntry =  new Entry({ user: entryObject.body.user, title: entryObject.body.title, summary: entryObject.body.summary, createdAt: entryObject.body.createdAt, card: entryObject.body.card })
  return newEntry.save();
}

const get = (user) => {
  const allEntries = Entry.find({ user: user });
  return allEntries;
}

const verify = async (user, pass) => {
  const allUsers = await User.find({ user: user, pass: pass});
  if (allUsers.length > 0) {
    return true;
  } else {
    return false
  }
}

const userInUse = async (user) => {
  const allUsers = await User.find({ user: user });
  if (allUsers.length > 0) {
    return true;
  } else {
    return false;
  }
}

const create = (user, pass) => {
  const newUser = new User({ user: user, pass: pass})
  return newUser.save();
}

const deleteOne = async (createdAt) => {
  const toDelete = await Entry.findOneAndRemove({ createdAt : createdAt })
  return;
}

module.exports.insert = insert;
module.exports.get = get;
module.exports.userInUse = userInUse;
module.exports.create = create;
module.exports.verify = verify;
module.exports.delete = deleteOne;