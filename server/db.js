const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1/tarot');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;
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
  const allEntries = Entry.find({ user: user }).sort({ createdAt: -1 });
  return allEntries;
}

const verify = async (user, pass) => {
  const allUsers = await User.find({ user: user });
  if (allUsers.length > 0) {
    const match = await bcrypt.compareSync(pass, allUsers[0].pass);
    if (match) {
      return true;
    } else {
      return false;
    }
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

const create = async (user, pass) => {
  const hashedPass = await bcrypt.hash(pass, 10);
  const newUser = new User({ user: user, pass: hashedPass })
  return newUser.save();
}

const deleteOne = async (user, createdAt) => {
  const toDelete = await Entry.findOneAndRemove({ createdAt : createdAt })
  return;
}

const change = async (obj) => {
  const hashedNew = await bcrypt.hash(obj.new, 10);
  const toUpdate = await User.findOne({ user: obj.user })
  console.log(toUpdate);
  const match = await bcrypt.compareSync(obj.pass, toUpdate.pass)
  if (match) {
    const Updating = await User.findOneAndUpdate({ user: obj.user }, { pass : hashedNew });
    return Updating;
  } else {
    console.log('nope');
    return;
  }
}

module.exports.insert = insert;
module.exports.get = get;
module.exports.userInUse = userInUse;
module.exports.create = create;
module.exports.verify = verify;
module.exports.delete = deleteOne;
module.exports.change = change;