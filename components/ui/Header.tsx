import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Header {
  height?: number;
}

export function Header({  
  height = 100 
}: Header) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.container, 
      { 
        paddingTop: insets.top,
        backgroundColor: 'white',
        height: height + insets.top 
      }
    ]}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/app-icon.png")}
        />
      <Text>App Header Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
  },
}); 