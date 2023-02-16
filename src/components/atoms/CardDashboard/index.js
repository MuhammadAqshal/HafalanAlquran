import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const CardDashboard = ({name, total}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.total}>{total}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardDashboard;

const styles = StyleSheet.create({
  container: {flex: 1},
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    backgroundColor: 'white',
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardContent: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.primary.regular,
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: colors.textGrey,
  },
  total: {
    fontFamily: fonts.primary.bold,
    fontSize: 24,
    flex: 1,
    alignSelf: 'center',
    color: colors.secondary,
    marginTop: 5,
  },
});
