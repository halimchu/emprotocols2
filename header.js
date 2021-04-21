
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'  


const HeaderLeft = (props) => {
  const navigation = useNavigation()
  return (
    <Button 
      icon={
          <Icon 
            name={props.iconName} 
            size={Dimensions.get('window').height/26} 
            color="white" 
          />
      }
      onPress={ () => {
        if (props.iconName === 'menu') {
            return navigation.toggleDrawer()
          } else {
            return navigation.goBack()
          }
        }
      } 
      type='clear'
    />
  )
}

const HeaderTitle = (props) => {
  return (
    <View>
      <Text style={{ 
        fontSize: Dimensions.get('window').height/43, 
        marginTop: Dimensions.get('window').height/200, 
        color: 'white', 
        fontWeight: 'bold', 
        
      }}>
          {props.name}
      </Text>
    </View>
  )
}

const HeaderRight = (props) => {
  const navigation = useNavigation()
  return (
    <Button 
      icon={
          <Icon  
            name={props.iconName} 
            size={Dimensions.get('window').height/26} 
            color="white" 
          />
      }
      onPress={ () => {navigation.navigate('HomeScreen')}
      } 
      type='clear'
    />
  )
}

const header = (headerLeftIconName, headerRightIconName, headerTitle, pathway) => {
  // this function is returning an object
  let headerColor

  if (pathway) {
    headerColor=['#0795C7', '#079BCB', '#069FCB', '#06A5CF', '#0DA9D1', '#0DADD3', '#0EB2D5', '#02B7D9']
  } else {
      if (headerTitle === 'EMP') {
        headerColor=['#2AC5D7', '#2EC6D6', '#31C6D6']
      } else if (headerTitle === 'MGH') {
        headerColor=['#02bfdb', '#00c0dc', '#02c1dd']
      } else if (headerTitle === 'BWH') {
        headerColor=['#146EB5', '#1D74B7', '#277ABB']
      } 
  }


  return {
      headerTitle: (props) => <HeaderTitle name={headerTitle} />,
      headerLeft: () =>  <HeaderLeft iconName={headerLeftIconName} />,
      headerBackground: () => (
        <LinearGradient
            colors={headerColor}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),
      headerRight: () => <HeaderRight iconName={headerRightIconName} />,
      gestureEnabled: true,
      swipeEnabled: false,
  }
}

export {header}