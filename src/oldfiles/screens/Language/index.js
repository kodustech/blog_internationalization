/*
import React, {useMemo} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

function Language() {
  const languages = useMemo(() => {
    return [{name: 'Português', id: 'pt-BR'}, {name: 'Inglês', id: 'en-US'}];
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={styles.nameContainer}>
          <TouchableOpacity onPress={() => null}>
            <Text style={styles.languageName}>{item.name}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.selected} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        style={styles.list}
        data={languages}
        key={(item, index) => String(index)}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  item: {
    height: 45,
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  languageName: {
    fontSize: 16,
  },
  list: {
    marginTop: 20,
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: 'lightgreen',
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

export default React.memo(Language);
*/
