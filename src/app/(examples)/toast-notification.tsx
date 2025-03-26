import React from 'react';
import { Button, View } from 'react-native';
import Toast from 'react-native-toast-message';

const ToastNotification = () => {
  const showToast = () => {
    Toast.show({
      type: 'success', 
      text1: 'Olá!',
      text2: 'Esta é uma notificação toast.',
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Mostrar Toast" onPress={showToast} />
    </View>
  );
};

export default ToastNotification;