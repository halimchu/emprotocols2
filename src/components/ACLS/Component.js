import React from 'react'
import { Image, TouchableOpacity, Dimensions, View, Text, StyleSheet } from 'react-native'
import {downArrow, upArrow} from '../../../assets/icons/index'

const Component = (props) => {

  function border () {
    if ( props.buttonTitle === 'Doses/Details' && props.title==='postCardiac') {
      return styles.buttonWithoutBottomBorder
    } else if (props.buttonTitle === "H's and T's" || props.buttonTitle === 'Doses/Details' || props.buttonTitle === 'Reversible Causes') {
      return styles.buttonWithBottomBorder
    } else if (!props.hidden) {
      return styles.buttonWithoutBottomBorder
    } else if (props.hidden) {
      return styles.button
    }
  } 



    return (
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity 
                style={border()} 
                onPress={() => {
                props.toggle()
              }}>
                <View style={{   
                  flexDirection: 'row',
                  flex: 1,
                  alignItems: 'center', 
                  paddingLeft: Dimensions.get('window').width/20,
                }}>
                    <Image source={ props.hidden ? downArrow : upArrow } 
                        style={ styles.arrowIphone }
                    />
                  <View style={{marginLeft: Dimensions.get('window').width/40 }}>
                    <Text style={ styles.customBtnText }>{props.buttonTitle}</Text>
                  </View>
                </View>
              </TouchableOpacity>


              {
              !props.hidden 
              ? 
              <View style={{
                width: Dimensions.get('window').width/1.02,
                backgroundColor: '#EDEDED',
                paddingLeft: Dimensions.get('window').width/30,
                paddingRight: Dimensions.get('window').width/30,
                paddingTop: Dimensions.get('window').height/100, 
                paddingBottom: Dimensions.get('window').height/100, 
              }}>
                {props.component} 
              </View>
              : 
              null
            }


            {!props.hidden ? props.goToNextComponent() : null}
        </View>
    ) 

}

export default Component


const styles = StyleSheet.create({ 
  arrowIphone: {
    height:Dimensions.get('window').width/30/2, 
    width:Dimensions.get('window').width/30
  },
  
  customBtnText: {
    fontWeight: '600',
    color: '#303333',
    marginRight: Dimensions.get('window').width/5,
  },
  button: {
    borderWidth: 1,
    borderBottomWidth: 0,
    width: Dimensions.get('window').width/1.02,
    height: Dimensions.get('window').height/18,
    borderColor: '#cfcfcf',
    backgroundColor: 'white',
  },
  buttonWithBottomBorder: {
    borderWidth: 1,
    width: Dimensions.get('window').width/1.02,
    height: Dimensions.get('window').height/18,
    borderColor: '#cfcfcf',
    backgroundColor: 'white',
  },
  buttonReversibleCauses: {
    borderWidth: 1,
    width: Dimensions.get('window').width/1.02,
    height: Dimensions.get('window').height/18,
    borderColor: '#cfcfcf',
    backgroundColor: 'white',
  },
  buttonWithoutBottomBorder: {
    borderWidth: 1,
    borderBottomWidth: 0,
    width: Dimensions.get('window').width/1.02,
    height: Dimensions.get('window').height/18,
    borderColor: '#cfcfcf',
    backgroundColor: 'white',
  },
})