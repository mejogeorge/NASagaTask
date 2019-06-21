import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeList from '../Containers/HomeList'
import LaunchScreen from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'
import LandingView from '../Containers/LandingView'
import LandingTenants from '../Containers/LandingView/LandingTenants'
import LandingOwners from '../Containers/LandingView/LandingOwners'

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    HomeList: {
      screen: HomeList,
      navigationOptions: {
        headerStyle: styles.header,
        title: 'Results'
      }
    },
    LaunchScreen: { screen: LaunchScreen },
    LandingView: {
      screen: LandingView
    },
    LandingTenants: {
      screen: LandingTenants
    },
    LandingOwners: {
      screen: LandingOwners
    }
  },
  {
    // Default config for all screens
    headerMode: 'float',
    initialRouteName: 'LandingView',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
)

export default createAppContainer(PrimaryNav)
