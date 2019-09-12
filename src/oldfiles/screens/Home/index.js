/*
import React, {useReducer} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';

const downloadedReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREMENT':
      return {...state, count: state.count - 1};
    default:
      throw new Error();
  }
};

const downloadedInitialState = {count: 0};

function Home() {
  const [state, dispatch] = useReducer(
    downloadedReducer,
    downloadedInitialState,
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Bem-vindos!</Text>
        <Text style={styles.downloaded}>
          Essa aplicação já foi baixada{' '}
          <Text style={styles.downloadedCount}>{state.count}</Text> vezes!
        </Text>
        <Text style={styles.description}>
          Apenas demonstrando que podemos mudar dinamicamente o idioma durante o
          tempo de execução, isso é essencial para algumas aplicaçōes.
        </Text>
        <Button
          title="Pressione para incrementar"
          onPress={() => dispatch({type: 'INCREMENT'})}
        />
        {state.count > 0 ? (
          <Button
            style={styles.button}
            title="Pressione para decrementar"
            onPress={() => dispatch({type: 'DECREMENT'})}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 15,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  downloaded: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  downloadedCount: {
    fontWeight: 'bold',
  },
  description: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default React.memo(Home);
*/
