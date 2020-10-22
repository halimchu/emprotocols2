import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native' 
import Icon from 'react-native-vector-icons/MaterialIcons' 
import { Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
function generateNavigationOptions (navigation, backgroundColorArray, headerTitle, iconName) { 

  function generateNavigationAction () {
    if (iconName === 'menu') {
      return navigation.openDrawer()
    } else if (iconName === 'arrow-back-ios') {
      return navigation.goBack()
    }
  }

  return {
    headerLeft: () => ( 
      <View style={{ flexDirection: 'row' }}> 
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/33, marginTop: Dimensions.get('window').height/200,}}>
                <Icon name={iconName} size={Dimensions.get('window').height/33} color="white" />
              </View>
            }
            onPress={() => generateNavigationAction()}
            type='clear'
          />

          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
                <Icon name={iconName} size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
              </View>
            }
            onPress={() => generateNavigationAction()}
            type='clear'
          />

          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
                <Icon name={iconName} size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
              </View>
            }
            onPress={() => generateNavigationAction()}
            type='clear'
          />
      </View>
    ),
    
    headerTitle: () => (
        <View>
          <Text style={{ 
            fontSize: Dimensions.get('window').height/43, 
            marginTop: Dimensions.get('window').height/200, 
            color: 'white', fontWeight: 'bold', 
            textAlign: 'center'}}>{headerTitle}</Text>
        </View>
    ),

    headerRight: () => (
      <View style={{ flexDirection: 'row' }}>
        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="home" size={Dimensions.get('window').height/25} color="rgba(0, 0, 0, 0)"  />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />

        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="home" size={Dimensions.get('window').height/26} color="white" />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />
    </View>
    ),

    headerBackground: () => (
        <LinearGradient
            colors={backgroundColorArray}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),     

  }
}




function generateNavigationOptions2 (navigation) { 
  return {
    headerLeft: () => ( 
        <View style={{ flexDirection: 'row' }}> 
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="white" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />

          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />

          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
              </View>
            }
            onPress={() => navigation.goBack()}
            type='clear'
          />
      </View>
      ),

    headerTitle: () => (
      <View>
        <Text style={{ 
          fontSize: Dimensions.get('window').height/43, 
          marginTop: Dimensions.get('window').height/200, 
          color: 'white', fontWeight: 'bold', 
          textAlign: 'center'}}>MGH
        </Text>
      </View>
    ),

    headerBackground: () => (
      <Image
        style={{
          height: '100%',
          backgroundColor: 'white'
        }}
      />
    ),
      
    
  }
}
  

const styles = StyleSheet.create({
  backButtonIpad: {
    width: Dimensions.get('window').width/35, 
    height: Dimensions.get('window').width/35,
    // backgroundColor: 'orange'
  },
  iconIpadInvisibleArea: {
    width: Dimensions.get('window').width/25, 
    height: Dimensions.get('window').width/35,
    // backgroundColor: 'green',
  },
  iconIpadInvisibleAreaBottomOfImage: {
    width: Dimensions.get('window').width/19, 
    height: Dimensions.get('window').width/35,
    // backgroundColor: 'purple',
  },

  backButtonIphone: {  
    width: Dimensions.get('window').width/19, 
    height: Dimensions.get('window').width/19,
    // backgroundColor: 'orange',
  },
  iconIphoneInvisibleArea: {
    width: Dimensions.get('window').width/19, 
    height: Dimensions.get('window').width/25,
    // backgroundColor: 'green',
  },
  iconIphoneInvisibleAreaBottomOfImage: {
    width: Dimensions.get('window').width/19, 
    height: Dimensions.get('window').width/35,
    // backgroundColor: 'purple',
  },





  menuIpad: {
    height: Dimensions.get('window').width/50, 
    width: Dimensions.get('window').width/35,
    // backgroundColor: 'pink',
  },
  menuTransparentIpad: {
    height: Dimensions.get('window').width/40, 
    width: Dimensions.get('window').width/20,
    opacity: 0,
    // backgroundColor: 'green',
  },
  menuIphone: {
    height: Dimensions.get('window').width/30, 
    width: Dimensions.get('window').width/20,
    // backgroundColor: 'pink',
  },
  menuTransparentIphone: {
    height: Dimensions.get('window').width/20, 
    width: Dimensions.get('window').width/20,
    opacity: 0,
    // backgroundColor: 'green',
  },
  menuTransparentIphoneTop: {
    height: Dimensions.get('window').width/50, 
    width: Dimensions.get('window').width/20,
    opacity: 0,
    // backgroundColor: 'purple',
  },
  headerTitleIpad: {
    fontSize: Dimensions.get('window').width/40, 
    marginTop: Dimensions.get('window').height/200, 
    color: '#288CAE', 
    fontWeight: '500', 
    textAlign: 'center'
  },
  headerTitleIphone: {
    fontSize: Dimensions.get('window').width/25, 
    marginTop: Dimensions.get('window').height/200, 
    color: '#288CAE', 
    fontWeight: '500', 
    textAlign: 'center'
  },
})

export {
  generateNavigationOptions,
  // generateNavigationOptions2,
  // generateCorrectStyle,
}






