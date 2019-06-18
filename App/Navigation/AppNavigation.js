import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeList from '../Containers/HomeList'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  HomeList: {
    screen: HomeList,
    navigationOptions: {
      headerStyle: styles.header,
      title: 'Results'
    }
  },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'HomeList',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
