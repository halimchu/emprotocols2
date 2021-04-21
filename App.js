/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

// org.reactjs.native.example.EM-Protocols
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {header} from './header'




import Navigator from './routes/drawerStack'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './src/components/ACLS/CardiacArrest/TimerDashboard/redux/index'

const store = createStore(reducers, applyMiddleware(thunk, logger))



import Home from './src/components/Home'
import MGHHome from './src/components/MGH/MGHHome'
import BWHHome from './src/components/BWH/BWHHome'
import ADMGH from './src/components/MGH/AorticDissection/ADMGH'
import ADInitialStepsMGH from './src/components/MGH/AorticDissection/ADInitialStepsMGH'
import ACLSHomeMGH from './src/components/ACLS/ACLSHomeMGH'
import ACLSHomeBWH from './src/components/ACLS/ACLSHomeBWH'
import CardiacArrestCOVIDBWH from './src/components/ACLS/CardiacArrest/BWH/CardiacArrestCOVIDBWH'
import CardiacArrestCOVIDMGH from './src/components/ACLS/CardiacArrest/MGH/CardiacArrestCOVIDMGH'
import CardiacArrestBWH from './src/components/ACLS/CardiacArrest/BWH/CardiacArrestBWH'
import CardiacArrestMGH from './src/components/ACLS/CardiacArrest/MGH/CardiacArrestMGH'
import Bradycardia from './src/components/ACLS/Bradycardia/Bradycardia'
import Tachycardia from './src/components/ACLS/Tachycardia/Tachycardia'
import PostCardiacArrestCare from './src/components/ACLS/PostCardiacArrestCare/PostCardiacArrestCare'
import RICUMGH from './src/components/MGH/DifficultAirway/RICUMGH'
import RICUBWH from './src/components/BWH/DifficultAirway/RICUBWH'
import MTPMGH from './src/components/MGH/MTP/MTPMGH'
import MTPNextStepsMGH from './src/components/MGH/MTP/MTPNextStepsMGH'
import MTPBWH from './src/components/BWH/MTP/MTPBWH'
import EmergencyBloodReleaseBWH from './src/components/BWH/MTP/EmergencyBloodReleaseBWH'
import MassiveTransfusionProtocolBWH from './src/components/BWH/MTP/MassiveTransfusionProtocolBWH'
import MTPNextStepsBWH from './src/components/BWH/MTP/MTPNextStepsBWH'
import MTPNextStepsRememberBWH from './src/components/BWH/MTP/MTPNextStepsRememberBWH'
import PertMGH from './src/components/MGH/Pert/PertMGH'
import PERTNextStepsMGH from './src/components/MGH/Pert/PertNextStepsMGH'
import FirstPagePE from './src/components/BWH/Pert/FirstPagePE'
import SecondPageNoPEBWH from './src/components/BWH/Pert/SecondPageNoPEBWH'
import SecondPageYesPEBWH from './src/components/BWH/Pert/SecondPageYesPEBWH'
import ThirdPageNoPEBWH from './src/components/BWH/Pert/ThirdPageNoPEBWH'
import ThirdPageYESPEBWH from './src/components/BWH/Pert/ThirdPageYESPEBWH'
import FourthPagePEBWH from './src/components/BWH/Pert/FourthPagePEBWH'
import STEMIMGH from './src/components/MGH/STEMI/STEMIMGH'
import STEMIMGHNextStepsMGH from './src/components/MGH/STEMI/STEMIMGHNextStepsMGH'


const HomeStack = createStackNavigator()
const Drawer = createDrawerNavigator()

const HomeScreenStack = () => {
  const navigation = useNavigation()
  return (
    <HomeStack.Navigator navigation={navigation}>
      <HomeStack.Screen name='HomeScreen' component={Home} options={header('menu', 'home-sharp', 'EMP')}/>
      <HomeStack.Screen name='MGHHome' component={MGHHome} options={header('chevron-back-outline', 'home-sharp', 'MGH')}/>
      <HomeStack.Screen name='BWHHome' component={BWHHome} options={header('chevron-back-outline', 'home-sharp', 'BWH')}/>
      <HomeStack.Screen name='ADMGH' component={ADMGH} options={header('chevron-back-outline', 'home-sharp', 'MGH', 'MGH')}/>
      <HomeStack.Screen name='ADInitialStepsMGH' component={ADInitialStepsMGH} options={header('chevron-back-outline', 'home-sharp', 'MGH')}/>
      <HomeStack.Screen name='ACLSHomeMGH' component={ACLSHomeMGH} options={header('chevron-back-outline', 'home-sharp', 'MGH', true)}/>
      <HomeStack.Screen name='ACLSHomeBWH' component={ACLSHomeBWH} options={header('chevron-back-outline', 'home-sharp', 'BWH', true)}/>
      <HomeStack.Screen name='CardiacArrestCOVIDBWH' component={CardiacArrestCOVIDBWH} options={header('chevron-back-outline', 'home-sharp', 'ACLS', true)}/>
      <HomeStack.Screen name='CardiacArrestCOVIDMGH' component={CardiacArrestCOVIDMGH} options={header('chevron-back-outline', 'home-sharp', 'ACLS', true)}/>
      <HomeStack.Screen name='CardiacArrestBWH' component={CardiacArrestBWH} options={header('chevron-back-outline', 'home-sharp', 'ACLS', true)}/>
      <HomeStack.Screen name='CardiacArrestMGH' component={CardiacArrestMGH} options={header('chevron-back-outline', 'home-sharp', 'ACLS', true)}/>
      <HomeStack.Screen name='Bradycardia' component={Bradycardia} options={header('chevron-back-outline', 'home-sharp', 'ACLS', true)}/>
      <HomeStack.Screen name='Tachycardia' component={Tachycardia} options={header('chevron-back-outline', 'home-sharp', 'ACLS', true)}/>
      <HomeStack.Screen name='PostCardiacArrestCare' component={PostCardiacArrestCare} options={header('chevron-back-outline', 'home-sharp', 'ACLS', true)}/>
      <HomeStack.Screen name='RICUMGH' component={RICUMGH} options={header('chevron-back-outline', 'home-sharp', 'MGH')}/>
      <HomeStack.Screen name='RICUBWH' component={RICUBWH} options={header('chevron-back-outline', 'home-sharp', 'BWH')}/>
      <HomeStack.Screen name='MTPMGH' component={MTPMGH} options={header('chevron-back-outline', 'home-sharp', 'MGH')}/>
      <HomeStack.Screen name='MTPNextStepsMGH' component={MTPNextStepsMGH} options={header('chevron-back-outline', 'home-sharp', 'MGH')}/>
      <HomeStack.Screen name='MTPBWH' component={MTPBWH} options={header('chevron-back-outline', 'home-sharp', 'BWH')}/>
      <HomeStack.Screen name='EmergencyBloodReleaseBWH' component={EmergencyBloodReleaseBWH} options={header('chevron-back-outline', 'home-sharp', 'BWH')}/>
      <HomeStack.Screen name='MassiveTransfusionProtocolBWH' component={MassiveTransfusionProtocolBWH} options={header('chevron-back-outline', 'home-sharp', 'BWH')}/>
      <HomeStack.Screen name='MTPNextStepsBWH' component={MTPNextStepsBWH} options={header('chevron-back-outline', 'home-sharp', 'BWH')}/>
      <HomeStack.Screen name='MTPNextStepsRememberBWH' component={MTPNextStepsRememberBWH} options={header('chevron-back-outline', 'home-sharp', 'BWH')}/>
      <HomeStack.Screen name='PertMGH' component={PertMGH} options={header('chevron-back-outline', 'home-sharp', 'MGH')}/>
      <HomeStack.Screen name='PERTNextStepsMGH' component={PERTNextStepsMGH} options={header('chevron-back-outline', 'home-sharp', 'MGH')}/>
      <HomeStack.Screen name='FirstPagePE' component={FirstPagePE} options={header('chevron-back-outline', 'home-sharp', 'BWH')}/>
      <HomeStack.Screen name='SecondPageNoPEBWH' component={SecondPageNoPEBWH} options={header('chevron-back-outline', 'home-sharp', 'BWH')}/>
      <HomeStack.Screen name='SecondPageYesPEBWH' component={SecondPageYesPEBWH} options={header('chevron-back-outline', 'home-sharp', 'BWH')}/>
      <HomeStack.Screen name='ThirdPageNoPEBWH' component={ThirdPageNoPEBWH} options={header('chevron-back-outline', 'home-sharp', 'BWH')}/>
      <HomeStack.Screen name='ThirdPageYESPEBWH' component={ThirdPageYESPEBWH} options={header('chevron-back-outline', 'home-sharp', 'BWH')}/>
      <HomeStack.Screen name='FourthPagePEBWH' component={FourthPagePEBWH} options={header('chevron-back-outline', 'home-sharp', 'BWH')}/>
      <HomeStack.Screen name='STEMIMGH' component={STEMIMGH} options={header('chevron-back-outline', 'home-sharp', 'MGH')}/>
      <HomeStack.Screen name='STEMIMGHNextStepsMGH' component={STEMIMGHNextStepsMGH} options={header('chevron-back-outline', 'home-sharp', 'MGH')}/>

    </HomeStack.Navigator>
  )
}



const App: () => React$Node = () => {
  return (

    <Provider store={store}>
      <NavigationContainer>
          <Drawer.Navigator initialRouteName='Home'>
              <Drawer.Screen 
                  name="Home" 
                  component={HomeScreenStack} 
                  options={{headerShown: false,}}
              />
            </Drawer.Navigator>
      </NavigationContainer>
    </Provider>




    // <Provider store={store}>
    //   <NavigationContainer>
    //     <Navigator />
    //   </NavigationContainer>
    // </Provider>

  )
}

export default App
