import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AllItems from './AllItems';
import CreateScreen from './CreateScreen';

const HomeScreen = () => {
  const [view, setView] = useState(0);
  const [data, setData] = useState([
    {id: 1, name: 'wheat', stock: 35, unit: 'kg'},
    {id: 2, name: 'rice', stock: 25, unit: 'kg'},
    {id: 3, name: 'pulses', stock: 8, unit: 'kg'},
    {id: 4, name: 'oil', stock: 12, unit: 'l'},
    {id: 5, name: 'milk', stock: 15, unit: 'l'},
    {id: 6, name: 'almonds', stock: 3, unit: 'l'},
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DashBoard</Text>
      <View style={styles.btnCont}>
        <Pressable
          style={[styles.btn, view === 0 ? {backgroundColor: 'green'} : null]}
          onPress={() => setView(0)}>
          <Text style={[styles.btnText, view === 0 ? {color: 'white'} : null]}>
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[styles.btn, view === 1 ? {backgroundColor: 'green'} : null]}
          onPress={() => setView(1)}>
          <Text style={[styles.btnText, view === 1 ? {color: 'white'} : null]}>
            Low Stocks
          </Text>
        </Pressable>
        <Pressable
          style={[styles.btn, view === 2 ? {backgroundColor: 'green'} : null]}
          onPress={() => setView(2)}>
          <Text style={[styles.btnText, view === 2 ? {color: 'white'} : null]}>
            Create
          </Text>
        </Pressable>
      </View>
      {view === 0 && <AllItems data={data} />}
      {view === 1 && <AllItems data={data.filter(item => item.stock < 20)} />}
      {view === 2 && <CreateScreen data={data} setData={setData} />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    padding: '4%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  btnCont: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  btn: {
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 3.5,
  },
  btnText: {
    color: 'green',
    fontSize: 12,
  },
});
