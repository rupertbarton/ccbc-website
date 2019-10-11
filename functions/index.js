const admin = require('firebase-admin')

admin.initializeApp();

exports.auth = require('./src/auth')