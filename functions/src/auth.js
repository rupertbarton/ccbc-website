const functions = require('firebase-functions').region('europe-west2');
const admin = require('firebase-admin')

exports.addCustomClaims = functions.firestore.document('users/{userId}').onWrite((change, context) => {
  let user = change.after.data()
    additionalClaims = {
      isAdmin: user.isAdmin,
      isCaptain: user.isCaptain,
      isExec: user.isExec,
      isMember: user.isMember,
      roleName: user.roleName
    }
    admin.auth().setCustomUserClaims(context.params.userId, additionalClaims)
});