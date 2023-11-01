import React, {useContext} from 'react';
import {StyleSheet,  View, Text, TextInput} from 'react-native';
import FeedList from '../components/FeedList';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';
import SearchContext from '../contexts/SearchContext';

function FeedsScreen({navigation}) {
  const {logs} = useContext(LogContext);

  return (
  <View style={styles.block}>
    <FeedList logs ={logs} />
    <FloatingWriteButton />
    </View>
   );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    },
});

export default FeedsScreen;
