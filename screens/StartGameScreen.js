import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   View,
   Button,
   TouchableWithoutFeedback,
   Keyboard,
   Alert,
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/input';

const StartGameScreen = (props) => {
   const [enteredValue, setEnteredValue] = useState('');
   const [selectedNumber, setSelectedNumber] = useState();

   const numberInputHandler = (inputText) => {
      setEnteredValue(inputText.replace(/[^0-9]/g, ''));
   };

   const resetInputHandler = () => {
      setEnteredValue('');
   };

   const confirmInputHandler = () => {
      const choosenNumber = parseInt(enteredValue);
      if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
         Alert.alert('Invalid number!', 'Number has to be between 1 and 99.', [
            { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
         ]);
         return;
      }
      setSelectedNumber(choosenNumber);
      setEnteredValue('');
   };

   return (
      <TouchableWithoutFeedback
         onPress={() => {
            Keyboard.dismiss();
         }}
      >
         <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
               <Text>Select a Number</Text>
               <Input
                  style={styles.input}
                  blurOnSubmit
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  onChangeText={numberInputHandler}
                  value={enteredValue}
                  maxLength={2}
               />
               <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                     <Button
                        title="Reset"
                        onPress={resetInputHandler}
                        color={Colors.secondary}
                     />
                  </View>
                  <View style={styles.button}>
                     <Button
                        title="Confirm"
                        onPress={confirmInputHandler}
                        color={Colors.primary}
                     />
                  </View>
               </View>
            </Card>
         </View>
      </TouchableWithoutFeedback>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 16,
      alignItems: 'center',
   },
   title: {
      fontSize: 20,
      marginVertical: 10,
   },
   inputContainer: {
      width: 300,
      maxWidth: '80%',
      alignItems: 'center',
   },
   buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
   },
   input: {
      width: 50,
      textAlign: 'center',
   },
   button: {
      width: 100,
   },
   summaryContainer: {
      marginVertical: 20,
   },
});

export default StartGameScreen;
