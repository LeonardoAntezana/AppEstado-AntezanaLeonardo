import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BreadItem = ({bread, onSelected}) => {
  const { name, price, weight } = bread;
  return (
    <TouchableOpacity onPress={() => onSelected(bread)}>
      <View style={styles.breadItem}>
        <View>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View>
          <Text style={styles.details}>${price}</Text>
          <Text style={styles.details}>{weight}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default BreadItem

const styles = StyleSheet.create({
  breadItem: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSans_700Bold'
  },
  details: {
    fontSize: 18,
  },
})