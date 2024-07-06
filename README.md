# React-Native-Expo-FCM-HTTP-V1-Guide

To run:

1. Clone the repository
2. Navigate to the cloned repository
3. Replace the following inside the `app.json` file with the actual values:
   * `<your_expo_username>`
   * `<your_android_bundle_identifier>`
   * `<path_to_your_google_service_json_file>`
   * `<your_ios_bundle_identifier>`
   * `<your_expo_project_id>`
4. Replace the following inside the `app/App.js` file with the actual value:
   * `<your_project_id>`
5. Execute the following command: `npm install`
6. Execute the following command to check dependencies: `npm run checkDependencies`
7. Execute the following command to run the code: `npm run Android`

Before running, make sure that you have the relevant development environment for React Native Expo set up. You do do so by following this link: https://reactnative.dev/docs/0.70/environment-setup

Relevant Medium article: https://medium.com/@raahimkhan_85173/how-to-send-push-notifications-using-firebase-cloud-messaging-fcm-http-v1-api-in-react-native-f5af828b8c09
