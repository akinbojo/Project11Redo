import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import { collection, getDocs, getFirestore, onSnapshot } from 'firebase/firestore'; 

export default function Trips() {
  const [listings, setListings] = useState([]);
  const db = getFirestore()

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'reservations'), 
      (snapshot) => {
        setListings(snapshot.docs.map(doc => doc.data()))  
      }
    );
  
    return unsubscribe;
  }, [])

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.container}>
            <Image 
              source={{uri: item.image}}
              style={styles.image}
            />

            <View style={styles.title}>
              <Text style={styles.title}>
                {item.title}  
              </Text>

              <Text style={styles.price}>
                {item.price}
              </Text>
            </View>

          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80, 
    borderRadius: 40
  },
  title: {
   fontSize: 16,
   fontWeight: 'bold'
  },
  price: {
    color: '#888', 
    fontSize: 14 
  },
  type: {
    color: '#888', 
    fontSize: 12 
  }
});
