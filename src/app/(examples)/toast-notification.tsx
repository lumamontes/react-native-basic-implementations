import React from "react";
import {FlatList, TouchableOpacity, View, Text, StyleSheet,} from "react-native";
import Toast from "react-native-toast-message";

const dummyData = [
  { title: 'Toast Success'},
  { title: 'Toast Error' },
  { title: 'Toast Info' },
  // ... seus dados
];

export default function ToastNotification(){

  const showToast = (type, text1, text2) => {
    Toast.show({
      type: type,
      text1: text1,
      text2: text2,
      visibilityTime: 2000,
    });
  }

  const toastConfig = {
    'Toast Success': {
      type: 'success',
      text1: 'Toast Sucess',
      text2: 'Example of toast success',
    },
    'Toast Error': {
      type: 'error',
      text1: 'Toast Error',
      text2: 'Example of toast error',
    },
    'Toast Info': {
      type: 'info',
      text1: 'Toast Info',
      text2: 'Example of toast info',
    },
  };


return(
  
<View style={styles.container}>    
      <Text style={styles.title}>Toast Notification</Text>
      <Text style={styles.description}>
      This example demonstrates a toast notification that serves as a short message to provide feedback to the user.
      </Text>

      <Toast/>

      <Text style={{ paddingBottom: 6 }}>Press buttons to toast notification</Text>
      <View style={styles.data_container}>


      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            const config = toastConfig[item.title];
            if (config){
              showToast(config.type, config.text1, config.text2);
            }
          }}>
            <View style={styles.item}>
              <Text>{item.title}</Text>  
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.title}
      />

      </View>

      <Text>
          Example from the react native tost-message at
          https://github.com/calintamas/react-native-toast-message
      </Text>
</View>      
);


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    data_container: {
      flex: 1,
      width: "100%",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
    },
    description: {
      fontSize: 18,
      color: "gray",
      textAlign: "center",
      marginVertical: 20,
    },
    item: {
      width: "auto",
      height: 80,
      backgroundColor: "white",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    separator: {
      backgroundColor: "rgb(200, 199, 204)",
      height: StyleSheet.hairlineWidth,
    },
  });
  

