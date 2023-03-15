import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FONTS } from '../constants/fonts'

const GridItem = ({category, onSelected}) => {
  const {title, color} = category;
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity 
        onPress={() => onSelected(category)}
        style={[styles.container, {backgroundColor: color}]}
        >
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default GridItem

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    fontFamily: FONTS.OPSANSBOLD,
    textAlign: 'center',
  }
})