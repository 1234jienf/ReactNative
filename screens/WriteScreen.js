import { useNavigation } from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {Platform, StyleSheet, View, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteEditor from '../components/WriteEditor';
import WriteHeader from '../components/WriteHeader';
import LogContext from '../contexts/LogContext';

function WriteScreen({route}) {
  const log = route.params?.log;

  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const navigation = useNavigation();

  const {onCreate, onModify, onRemove} = useContext(LogContext);
  const onSave = () => {
    if (log) {
      onModify({
        id: log.id,
        date: log.date,
        title,
        body,
      });
    } else {
    onCreate({
      title,
      body,
      date: new Date().toISOString(),
    });
  }
    navigation.pop();
  };

  const onAskRemove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        {text: '취소', style: 'cancel'},
        {
          text: '삭제', 
          onPress: () => {
            onRemove(log?.id);
            navigation.pop();
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader onSave={onSave}
      onAskRemove={onAskRemove}
      isEditing={!!log}
       />
      <WriteEditor
        title={title}
        body={body}
        onChangeTitle={setTitle}
        onChangeBody={setBody}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default WriteScreen;
