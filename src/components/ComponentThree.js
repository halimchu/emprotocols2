import React from 'react'
import { TouchableOpacity, Dimensions, View, Text, StyleSheet } from 'react-native'

export default class ComponentThree extends React.Component {

  someFunc = () => {
    if (!this.props.hiddenParent) {
      // this.props.goToNextComponent()
      return this.props.component //show the parent


    }
  }



  render() {
    return (
      <View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.customBtnBG} onPress={() => {
            this.props.toggle()
          }}>
            <Text style={styles.customBtnText}>{this.props.buttonTitle}</Text>
          </TouchableOpacity>
        </View>

        {/* {!this.props.hiddenParent ? this.props.component : null}  */}
        {/* {!this.props.hidden ? this.props.goToNextComponent() : null} */}
        {/* {!this.props.hidden ? this.someFunc() : null} */}

        {this.someFunc()}

        
      </View>
    )
  }
}


const styles = StyleSheet.create({
  customBtnText: {
    fontWeight: '600',
    color: "#333333",
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/44,
    marginTop: Dimensions.get('window').height/80,
  },
  customBtnBG: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#dedede',
    width: Dimensions.get('window').width/1,
    height: Dimensions.get('window').height/18,
  },
})