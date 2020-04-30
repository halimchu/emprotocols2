import { createStackNavigator } from 'react-navigation-stack'
import About from '../src/components/drawer/About'


const AboutStack = createStackNavigator({
  About: { screen: About },
})


export default AboutStack