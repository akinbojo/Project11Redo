import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Stack, useNavigation } from "expo-router";
import ExploreHeader from "../../components/ExploreHeader";
import Listings from "../../components/Listings";
import ListingDetails from "../../components/ListingDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Explore() {
  const navigation = useNavigation();
  const Stakk = createNativeStackNavigator();
  return (
    <><View style={{ flex: 1 }}>
      <Stack.Screen options={{ header: () => <ExploreHeader /> }} />
    </View><
      SafeAreaView style={{ flex: 3 }}>
        <Stakk.Navigator initialRouteName="Listing">
          <Stakk.Screen name= "Listings" component={Listings}/>
          <Stakk.Screen name= "ListingDetails" component={ListingDetails}/>
        </Stakk.Navigator>
  
      </SafeAreaView>
    </>
  );
}
