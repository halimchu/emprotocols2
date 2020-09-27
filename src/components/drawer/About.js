import React from 'react'
import { Image, Dimensions, View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class About extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <MaterialIcons name="menu" size={Dimensions.get('window').height/26} color="white" />
              </View>
            }
            onPress={ () => navigation.openDrawer()}
            type='clear'
          /> 
      </View>
    )

    headerTitle = (
      <View>
        <Text style={{ 
          fontSize: Dimensions.get('window').height/43, 
          marginTop: Dimensions.get('window').height/200, 
          color: 'white', fontWeight: 'bold', 
          textAlign: 'center'}}>EMP</Text>
      </View>
    )
      
    let headerRight = (
      <View style={{ flexDirection: 'row' }}>
        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)"  />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />

        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={Dimensions.get('window').height/29} color="white" />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />
      </View>
    )
    
    return { 
      headerLeft,
      headerRight,
      headerTitle,
      headerBackground: (
        <LinearGradient
          colors={['#0B58AC', '#0F93BD']}
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
      ),   
    }
  }


  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={{marginLeft: Dimensions.get('window').width/25, paddingRight: Dimensions.get('window').width/40, }}>
            <Text style={styles.bold}>About the App</Text>
            <Text style={styles.text}>
            The EMP app is a reference for clinical protocols, resources, and content to guide providers through acutely life-threatening illnesses. All ED algorithms and protocols are developed and vetted by their respective EM faculty review groups in partnership with specialty specific committees. All ACLS content in the app is material developed, studied, and vetted by the American Heart Association. For COVID19 specific content, EM faculty within HICS leadership meet with specialty specific committees to develop, vet, and release ED specific COVID19 guidelines.
            The AHA has given permission and a license to use their ACLS materials for the purposes of this app. 
            
            </Text>
            <Text style={styles.bold}>Creators</Text>
            <Text style={styles.text}>Andrew Chu, MD, MPH</Text>
            <Text style={styles.text}>Jared Conley, MD, PhD, MPH</Text>


            <Text style={styles.bold}>Significant Contributors:</Text>
            <Text style={styles.text}>Halim Chu</Text>
            <Text style={styles.text}>Yonatan Keschner, MD</Text>
            <Text style={styles.text}>Lucinda Lai, MD</Text>


            <Text style={styles.bold}>MGH Faculty Consultants:</Text>
            <Text style={styles.text}>
              Joshua Baugh, MD, MPP; 
              Theodore Benzer, MD, PhD; 
              Paul Biddinger, MD, FACEP; 
              Lauren Black, RN;
              Ali Raja, MD, MBA, MPH;
              Jonathan Sonis, MD, MHCM;
              Benjamin White, MD;
              Brian Yun, MD, MBA, MPH
            </Text>




            <Text style={styles.bold}>BWH Faculty Consultants:</Text>
            <Text style={styles.text}>
              Christopher Baugh, MD, MBA; 
              Paul Chen, MD, MBA
            </Text>





            <Text style={styles.bold}>Partners:</Text>
            <Text style={styles.text}>MGH Healthcare Transformation Lab (HTL)</Text>
            <Text style={styles.text}>American Heart Association (AHA)</Text>
            <Text style={styles.text}>HAEMR Digital Health Initiative (DHI)</Text>


            <Text style={styles.bold}>Acknowledgements:</Text>
            <Text style={styles.text}>Special thanks to all the MGH and BWH specialty committees, HICS leadership, and the American Heart Association for providing evidence-based guidelines and for their collaboration to enable this digital health tool to serve patients in need.</Text>
            
            <View style={{marginTop: Dimensions.get('window').height/60,}}>
              <Text style={styles.text}>We would also like to thank the following resident physicians for their contributions during our brainstorming sessions:</Text>
              </View>
            
            
            <View style={{marginTop: Dimensions.get('window').height/90}}>
              <Text style={styles.text}>Jeffrey Chen, MD</Text>
              <Text style={styles.text}>Stephen Dorner, MD</Text>
              <Text style={styles.text}>Imikimobong Ibia, MD</Text>
              <Text style={styles.text}>Michael Loesche, MD</Text>
              <Text style={styles.text}>Florence On, MD</Text>
              <Text style={styles.text}>Bryant Shannon, MD</Text>
              <Text style={styles.text}>Jossie Carreras Tartak, MD, MBA</Text>
            </View>

            <View style={{marginTop: 15}}>
              
            </View>


            
            
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: Dimensions.get('window').height/60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4d4d4d',
    fontSize: Dimensions.get('window').width/23,
  },
  bold: {
    marginTop: Dimensions.get('window').height/60,
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').width/23,
    color: '#4d4d4d',
  },
  text: {
    fontSize: Dimensions.get('window').width/25,
    color: '#636363',
  },
})