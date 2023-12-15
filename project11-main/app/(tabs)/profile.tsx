import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, Button } from 'react-native';
import { useNavigation} from 'expo-router';
import { FIREBASE_AUTH } from "../../firebase";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Login  from "../(modals)/login"
import { getAuth, signOut } from 'firebase/auth';


export function LoggedIn(){
  const auth = FIREBASE_AUTH
  const user = auth.currentUser
  const navigation = useNavigation();
  const createdAt = user?.metadata.creationTime?.toString();
  const [firstName, setFirstName] = useState(user?.displayName?.split(" ")[0] ?? "");
  const [lastName, setLastName] = useState(user?.displayName?.split(" ")[1] ?? "");

  const updateName = async () => {
    try {
      await updateProfile(user, { displayName: `${firstName} ${lastName}` });
      alert("Name updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Error updating name: " + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
      alert("Error logging out: " + error.message);
    }
  };


  return(
    <View>
      {/* Display profile content only if logged in r*/}
      {FIREBASE_AUTH.currentUser && (
        <View style={{ flex: 1, backgroundColor: '#F5F5F5', borderWidth: 1,
        borderColor: '#ccc'}}>
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
            <Image
              source={{ uri: 'https://placebear.com/250/250' }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text style={{ marginVertical: 10 }}>Welcome, {firstName} {lastName}!</Text>
              <TextInput
                style={{ marginVertical: 4, height: 40, borderWidth: 1, borderRadius: 4, padding: 10, backgroundColor: "#fff" }}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                style={{ marginVertical: 4, height: 40, borderWidth: 1, borderRadius: 4, padding: 10, backgroundColor: "#fff" }}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
              />
            <Text style={{ marginVertical: 10, borderWidth: 1, padding: 15 }}>
             Email: {user?.email?.toString()}
            </Text>
            <Text style={{ marginVertical: 10, borderWidth: 1, padding: 15 }}>
             Since: {createdAt}
            </Text>
          </View>
        </View>
      )}
      <View>
        <Button title="Log Out" onPress={handleLogout} />
      </View>
    </View>
  )
}

export default function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;
  const user = auth.currentUser

  useEffect(() => {
    if(!auth.currentUser) {
      navigation.navigate("Login"); 
    } else{
      navigation.navigate('LoggedIn')
    }
  }, []);


  return (
    <Stack.Navigator>
      <Stack.Screen name="LoggedIn" component={LoggedIn} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}