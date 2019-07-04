import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeList from '../Containers/HomeList'
import LaunchScreen from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'
import LandingView from '../Containers/LandingView'
import InfoCardView from '../Containers/InfoCardView'
import LoginView from '../Containers/LoginView'
import WelcomeViewThree from '../Containers/TenantCustomWelcomeScreen/WelcomeViewThree'
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
    image:
      'https://image.freepik.com/free-photo/abstract-luxury-clear-yellow-wall-well-use-as-backdrop-background-layout_1258-207.jpg',
    primaryText: I18n.t('forOwners.goodTenant'),
    secondaryText: I18n.t('forOwners.goodTenantAnswer')
  },
  {
    image:
      'https://image.freepik.com/free-photo/abstract-luxury-clear-yellow-wall-well-use-as-backdrop-background-layout_1258-207.jpg',
    primaryText: I18n.t('forOwners.doubtfulAboutOwner'),
    secondaryText: I18n.t('forOwners.doubtfulAboutOwnerAnswer'),
    buttonText: I18n.t('loginOrSignup')
  }
]
const dataSourceTenantCustom = [
  {
    id: 1,
    image:
      'https://image.freepik.com/free-photo/abstract-luxury-clear-yellow-wall-well-use-as-backdrop-background-layout_1258-207.jpg',
    secondaryText:
      'Your prospective owners are searching for you here. Build your rentscore by getting ratings from your previous owners.',
    buttonText: 'GET STARTED'
  },
  {
    id: 2,
    title: 'What is RentScore?',
    primaryText:
      'Rentscore is your tenancy history i.e. your punctuality in paying rent, how well you have kept their house etc.',
    buttonText: 'GET STARTED'
  },
  { id: 3, view: WelcomeViewThree, buttonText: 'GET STARTED' }
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
    },
    LoginOrSignup: {
      screen: LoginView
    },
    TenantCustomWelcome: {
      screen: InfoCardView,
      params: { dataSource: dataSourceTenantCustom }
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
