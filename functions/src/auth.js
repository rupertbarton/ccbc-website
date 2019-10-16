const functions = require('firebase-functions').region('europe-west2');
const admin = require('firebase-admin')

let db = admin.firestore()

exports.updateExecRoles = functions.https.onCall((data, context) => {
  return db.runTransaction(t => {
    if (context.auth.token.isCaptain || context.auth.token.isAdmin) {
      return db.collection('roles').get().then(snapshot => {
        let roles = {}
        snapshot.forEach(doc => {
          roles = ({ ...roles, [doc.id]: doc.data() });
        });

        for (let [key, value] of Object.entries(data)) {
          roles[key].userIds.map((oldUserId) => {
            //Check if user is in database but not in change, and demotes user
            if (!value.some((user) => user.userId === oldUserId)) {
              t.update(db.collection('users').doc(oldUserId), { roles: admin.firestore.FieldValue.arrayRemove(roles[key].name) })
              t.update(db.collection('roles').doc(key), { userIds: admin.firestore.FieldValue.arrayRemove(oldUserId) })
              if (roles[key].isCaptain) {
                t.update(db.collection('users').doc(oldUserId), { isCaptain: false })
              }
            }
          })
          roles[key].displayNames.map((oldUserDisplayName) => {
            //Check if user is in database but not in change, and removes the user's name
            if (!value.some((user) => user.displayName === oldUserDisplayName)) {
              t.update(db.collection('roles').doc(key), { displayNames: admin.firestore.FieldValue.arrayRemove(oldUserDisplayName) })
            }
          })
          value.map((newUser) => {
            if (!roles[key].userIds.includes(newUser.userId)) {
              //Check if user is in change but not in satabase, and premotes user
              t.update(db.collection('users').doc(newUser.userId), { roles: admin.firestore.FieldValue.arrayUnion(roles[key].name) })
              t.update(db.collection('roles').doc(key), { userIds: admin.firestore.FieldValue.arrayUnion(newUser.userId) })
              t.update(db.collection('roles').doc(key), { displayNames: admin.firestore.FieldValue.arrayUnion(newUser.displayName) })
              if (roles[key].isCaptain) {
                t.update(db.collection('users').doc(newUser.userId), { isCaptain: true })
              }
            }
          })
        }
      })
    }
    else {
      throw new functions.https.HttpsError('unauthenticated', 'User must either be a System Admin or Club Captain')
    }
  })
})

exports.addCustomClaims = functions.firestore.document('users/{userId}').onWrite((change, context) => {
  let user = change.after.data()
  additionalClaims = {
    isAdmin: user.isAdmin,
    isCaptain: user.isCaptain,
    isExec: !!user.roles.length,
    isMember: user.isMember,
    roles: user.roles
  }
  return admin.auth().setCustomUserClaims(context.params.userId, additionalClaims)
});

exports.createUserDbEntry = functions.auth.user().onCreate((user) => {
  let batch = db.batch()

  batch.set(db.collection('memberRequests').doc(user.uid),
    {
      displayName: user.displayName
    }
  )

  batch.set(db.collection('users').doc(user.uid),
    {
      displayName: user.displayName,
      roles: [],
      isAdmin: false,
      isCaptain: false,
      isMember: false,
    }
  )

  return batch.commit()
})