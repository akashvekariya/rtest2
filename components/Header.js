import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

const Header = (props) => {
   return (
      <View style={styles.header}>
         <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   header: {
      width: '100%',
      height: 90,
      paddingTop: 25,
      backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
   },
   headerTitle: {
      color: 'white',
      fontSize: 18,
   },
});

export default Header;
