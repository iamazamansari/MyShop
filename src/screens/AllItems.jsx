import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AllItems = ({data}) => {
  return (
    <View>
      <View style={styles.headingCont}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>
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
            <Text style={styles.itemText}>{item.stock}</Text>
          </View>
        )}
        contentContainerStyle={{gap: 10}}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  headingCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 16,
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
