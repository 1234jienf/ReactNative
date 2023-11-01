import React, {useContext, useReducer} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogContext from '../contexts/LogContext';

function CalenderScreen() {
  const {text} = useContext(LogContext);
  return <View style={styles.block} />;
}

const styles = StyleSheet.create({
  block: {},
});

export default CalenderScreen;
