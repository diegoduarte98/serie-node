const mongoose = require('../../database');

const UserShema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String, required: true, select: true },
    passwordResetToken: { type: String, select: false },
    passwordResetExpires: { type: Date, select: false },
    createdAt: { type: Date, default: Date.now },
});

UserShema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

const User = mongoose.model('User', UserShema);

module.exports = User;