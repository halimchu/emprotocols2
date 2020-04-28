import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'


import HomeStack from './homeStack'
// import AboutStack from './aboutStack'
// import TermsConditionsStack from './termsConditionsStack'
// import PrivacyPolicy from './privacyPolicyStack'


const RootDrawerNavigator = createDrawerNavigator({
  Home: { screen: HomeStack },
//   About: { screen: AboutStack },
//   TermsConditions: {
//       navigationOptions: {
//         drawerLabel: "Terms & Conditions"
//       },
//       screen: TermsConditionsStack
//     },
//   PrivacyPolicy: {
//     navigationOptions: {
//       drawerLabel: "Privacy Policy"
//     },
//     screen: PrivacyPolicy
//   }
})

export default createAppContainer(RootDrawerNavigator)

