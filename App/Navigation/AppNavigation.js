import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeList from '../Containers/HomeList'
import LaunchScreen from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'
import LandingView from '../Containers/LandingView'
// import LandingTenants from '../Containers/LandingView/LandingTenants'
// import LandingOwners from '../Containers/LandingView/LandingOwners'
// import InfoCard from '@Components/InfoCard'
import InfoCardView from '../Containers/InfoCardView'

const dataSourceOwner = [
  {
    id: 1,
    primaryText: 'Are you a good tenant?',
    secondaryText:
      'Build a good rentscore & get great houses by asking your previous owners to rate you.'
  },
  {
    id: 2,
    primaryText: 'Doubtful about your future owner?',
    secondaryText: 'See what their past tenants are saying about them!',
    buttonText: 'LOGIN or SIGNUP'
    // navigateTo:
  }
]

const dataSourceTenant = [
  {
    id: 1,
    primaryText: 'Need good tenants?',
    secondaryText:
      'Decide by seeing what previous owners are saying about them!'
  },
  {
    id: 2,
    primaryText: 'Worried that your tenants might wreck your home?',
    secondaryText: 'See your home photos along with rent every month.'
  },
  {
    id: 3,
    primaryText: 'Have old tenants who kept your home clean?',
    secondaryText: 'Help them find great houses by rating them good :)'
  },
  {
    id: 4,
    primaryText: 'Have old tenants who damaged your home?',
    secondaryText: 'Rate them poorly so that other owners will know.',
    buttonText: 'LOGIN or SIGNUP'
    // navigateTo:
  }
]

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
      screen: InfoCardView,
      params: { dataSource: dataSourceTenant }
    },
    LandingOwners: {
      screen: InfoCardView,
      params: { dataSource: dataSourceOwner }
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
