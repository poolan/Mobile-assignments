import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [randomNumber, setRandomNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [msg, setMsg] = useState('Guess a number between 0-100');
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const check = () => {
    if (randomNumber > parseInt(guess)) {
      setGuess('');
      counter++;
      setCounter(counter);
      return setMsg("Guess too small")
    } else if (randomNumber < parseInt(guess)) {
      setGuess('');
      counter++;
      setCounter(counter);
      return setMsg("Guess too big")
    } else {
      setGuess('');
      return setMsg(`You guessed the number in ${counter} tries!`);
    }
  }

  return (
    <View style={styles.container}>
      <Text>{msg}</Text>
      <TextInput 
          keyboardType = 'numeric'
          value = {guess}
          onChangeText = {txt => setGuess(txt)}
          style={styles.input}
        />
        <Button
        onPress = {check}
        title = "MAKE A GUESS"
        />
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  input: {
    marginTop: 10,
    marginBottom: 20,
    width: 200, 
    borderColor:'gray', 
    borderWidth:1
  }
});