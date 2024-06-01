import React, { useState, useEffect } from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import axios from 'axios';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    };
  },
});

const App = () => {

  const [deviceToken, setDeviceToken] = useState(null);

  const registerForPushNotificationsAsync = async () => {
    await Notifications.setNotificationChannelAsync('default', {
        name: 'default'
    });
    const token = await Notifications.getExpoPushTokenAsync({
      projectId: '<your_project_id>',
    });
    console.log('device token: ', token.data);
    setDeviceToken(token.data);
  };

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  const sendPushNotification = async () => {
    const data = {
      to: deviceToken,
      title: 'Push Notification',
      body: 'Hello World!',
    }
    const config = {
        method: 'post',
        url: 'https://exp.host/--/api/v2/push/send?useFcmV1=true',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data : data
    };
    try {
      const response = await axios.request(config);
      console.log(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Send push notification to self"
        onPress={() => sendPushNotification()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
