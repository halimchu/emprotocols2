import { createStackNavigator } from 'react-navigation-stack'
import ContactUs from '../src/components/drawer/ContactUs'


const ContactUsStack = createStackNavigator({
  contactUs: { screen: ContactUs },
})


export default ContactUsStack