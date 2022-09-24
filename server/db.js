const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1/tarot');
const Schema = mongoose.Schema;
const entrySchema = new Schema({
    user: String,
    title: String,
    summary: String,
    createdAt: Date,
})
const Entry = mongoose.model('Entry', entrySchema);

const insert = async (entryObject) => {
  const newEntry =  new Entry({ user: entryObject.body.user, title: entryObject.body.title, summary: entryObject.body.summary, createdAt: entryObject.body.createdAt})
  return newEntry.save();
}

const get = (user) => {
  const allEntries = Entry.find({ user: user });
  return allEntries;
}

module.exports.insert = insert;
module.exports.get = get;