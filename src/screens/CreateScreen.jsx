import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

const CreateScreen = ({data, setData}) => {
  const [stock, setStock] = useState('');
  const [itemName, setItemName] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const addItemHandler = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stock,
    };
    setData([...data, newItem]);
    setItemName('');
    setStock('');
    setIsEdit(false);
  };
  const deleteItemHandler = id => {
    setData(data.filter(item => item.id !== id));
  };
  const editItemHandler = item => {
    setIsEdit(true);
    setItemName(item.name);
    setEditItemId(item.id);
  };
  const updateItemHandler = () => {
    setData(
      data.map(item =>
        item.id === editItemId ? {...item, name: itemName, stock: stock} : item,
      ),
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter item..."
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={item => setItemName(item)}
      />
      <TextInput
        placeholder="Enter quantity..."
        placeholderTextColor="#999"
        style={styles.input}
        value={stock}
        onChangeText={item => setStock(item)}
      />
      <Pressable
        style={styles.btn}
        onPress={() => (isEdit ? updateItemHandler() : addItemHandler())}>
        <Text style={styles.txtBtn}>{isEdit ? 'EDIT ITEM' : 'ADD ITEM'}</Text>
      </Pressable>
      <View style={{marginTop: 10}}>
        <Text style={styles.headingText}> ALL ITEMS IN STOCK</Text>
        <FlatList
          keyExtractor={item => item.id}
          data={data}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemCont,
                {backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D756A1'},
              ]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{flexDirection: 'row', gap: 20}}>
                <Text style={styles.itemText}>{item.stock}</Text>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{gap: 10}}
        />
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#D756BFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  btn: {
    backgroundColor: '#CABFEEFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 16,
    marginVertical: 10,
  },
  itemCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  itemText: {
    fontWeight: '400',
    fontSize: 14,
  },
});
