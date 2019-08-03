const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;

const UserSchema = mongooseSchema(
  {
    // name: { type: String, required: true },
    email: { type: String, required: true },
    passwordHarsh: { type: String, required: true },
    reason: { type: String, required: true },
    avatar: { type: String },
    admin: { type: Boolean, default: false },
    graph:
      // [
      { type: Array }
    // { nodes: [{ id: { type: String }, label: { type: String } }] },
    // {
    //   edges: [
    //     {
    //       from: { type: String },
    //       to: { type: String },
    //       length: { type: Number },
    //       label: { type: String },
    //       id: { type: String }
    //     }
    //   ]
    // }
    // ]
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("user", UserSchema);
