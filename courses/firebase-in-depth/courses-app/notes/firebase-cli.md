# Firebase CLI quick commands

npx firebase init
npx firebase init emulators

# Start Firestore only
npx firebase emulators:start --only firestore

# Start Firestore with initial data
npx firebase emulators:start --only firestore --import firebase-testdata

# Export temporary data from Firebase Emulator
npx firebase emulators:export firebase-testdata
