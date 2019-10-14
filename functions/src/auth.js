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
  return admin.auth().setCustomUserClaims(context.params.userId, additionalClaims)
});

exports.createUserDbEntry = functions.auth.user().onCreate((user) => {
  let db = admin.firestore()
  let batch = db.batch()

  batch.set(db.collection('memberRequests').doc(user.uid),
    {
      displayName: user.displayName
    }
  )

  batch.set(db.collection('users').doc(user.uid),
    {
      displayName: user.displayName,
      roleName: "Unverified Member",
      isAdmin: false,
      isCaptain: false,
      isMember: false,
      isExec: false
    }
  )

  return batch.commit()
})