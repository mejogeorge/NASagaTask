import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  dots: {
    height: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: 38,
    marginBottom: 16
  },
  dot: {
    width: 8,
    height: 8,
    margin: 2,
    borderRadius: 4,
    backgroundColor: '#d8d8d8'
  },
  dotActive: {
    backgroundColor: '#4265ea'
  }
})
