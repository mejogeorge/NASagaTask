import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  radioBar: {
    paddingLeft: 4,
    paddingTop: 10,
    paddingBottom: 13,
    height: 52,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  radioDot: {
    borderRadius: 8,
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#979797',
    marginRight: 16
  },
  text: {
    color: '#565656',
    fontSize: 16,
    width: '100%'
  },
  subView: {
    flexDirection: 'row'
  },
  radioActiveOuterDot: {
    borderRadius: 8,
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#4265ea',
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  radioActiveInnerDot: {
    borderRadius: 3,
    width: 6,
    height: 6,
    backgroundColor: '#4265ea'
  }
})
