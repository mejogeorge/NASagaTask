import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeList from '../Containers/HomeList'
import LaunchScreen from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'
import LandingView from '../Containers/LandingView'
import InfoCardView from '../Containers/InfoCardView'
import I18n from 'react-native-i18n'

const dataSourceTenant = [
  {
    primaryText: I18n.t('forTenants.needGoodTenants'),
    secondaryText: I18n.t('forTenants.needGoodTenantsSubText')
  },
  {
    primaryText: I18n.t('forTenants.wreckHome'),
    secondaryText: I18n.t('forTenants.wreckHomeAnswer')
  },
  {
    primaryText: I18n.t('forTenants.homeClean'),
    secondaryText: I18n.t('forTenants.homeCleanAnswer')
  },
  {
    primaryText: I18n.t('forTenants.homeDamaged'),
    secondaryText: I18n.t('forTenants.homeDamagedAnswer'),
    buttonText: I18n.t('loginOrSignup')
  }
]

const dataSourceOwner = [
  {
    primaryText: I18n.t('forOwners.goodTenant'),
    secondaryText: I18n.t('forOwners.goodTenantAnswer')
  },
  {
    primaryText: I18n.t('forOwners.DoubtfulAboutOwner'),
    secondaryText: I18n.t('forOwners.DoubtfulAboutOwnerAnswer'),
    buttonText: I18n.t('loginOrSignup')
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
