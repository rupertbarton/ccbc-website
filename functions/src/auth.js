const functions = require('firebase-functions').region('europe-west2');
const admin = require('firebase-admin')

exports.addCustomClaims = functions.https.onCall((data, context) => {
  return admin.firestore().collection('users').doc(context.auth.uid).get().then((snapshot) => {
    user = snapshot.data()
    additionalClaims = {
      isAdmin: user.isAdmin,
      isCaptain: user.isCaptain,
      isExec: user.isExec,
      isMember: user.isMember,
      roleName: user.roleName
    }
    admin.auth().setCustomUserClaims(context.auth.uid, additionalClaims)
    return
  })
});