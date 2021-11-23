import React, { useState, useEffect } from 'react';
import MapView, {Region, Marker} from 'react-native-maps';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import * as Location from 'expo-location';

export default function Local() {
  const [location, setLocation] = useState < null | Location.LocationObject> (null);
  const [region, setRegion] = useState<Region>();
  const [errorMsg, setErrorMsg] = useState < null | string > (null);

  useEffect(() => {
    const handleLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      })
    };
    handleLocation()
  }, [])

  let text = 'Acessando localização..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      {!region && <Text style={styles.paragraph}>{text}</Text>}
      {region && (
        <MapView style={styles.map} region={region}>
          <Marker coordinate={region}/>
        </MapView>
      )}
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
    },

    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },

  });