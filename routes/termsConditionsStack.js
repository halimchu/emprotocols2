import { createStackNavigator } from 'react-navigation-stack'
import TermsConditions from '../src/components/drawer/TermsConditions'



const TermsConditionsStack = createStackNavigator({
  TermsConditions: { screen: TermsConditions },
})


export default TermsConditionsStack