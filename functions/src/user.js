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