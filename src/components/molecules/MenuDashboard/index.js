import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {CardDashboard} from '../../atoms';

const MenuDashboard = ({dashboards}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dashboards}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
        renderItem={item => (
          <CardDashboard
            key={item.id}
            name={item.item.name}
            total={item.item.total}
          />
        )}
      />
    </View>
  );
};

export default MenuDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
});
