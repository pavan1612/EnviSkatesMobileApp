import React, { Component }  from 'react'
import {View,Image,FlatList,StyleSheet} from 'react-native';

import { Block,Button,Text,Input,Checkbox,Icon} from 'galio-framework';
import { ListItem} from 'react-native-elements'
import { Formik } from "formik";
import axios from 'axios'
import config from '../../constants/Config'
class TransportMeansScreen extends React.Component {

    static navigationOptions = {
      title:'Transport Means'
    }

    constructor(props){
      super(props)
      this.state = {
        means: [{name:'Car'},{name:'Bus'},{name:'Train'},{name:'Tram'},{name:'Taxi'}],
        meansVal : [0,0,0,0,0]
      }
    }

    handleNext = (info) =>{
      console.log(info);
      this.props.navigation.navigate('CarbonEmissionScreen',{
        c_emission : info.c_emission
      })
    }

    componentDidMount(){
      console.log(this.state.means);
    }


    render() {
        return (
          <Formik
            initialValues={{Car:"0",Bus:"0",Train:"0",Tram:"0",Taxi:"0"}}
            validate = {values => {
              let errors = {}

              return errors
            }}
            onSubmit={ async (values) => {
                console.log("Mean submitted");
                console.log(values.Car);
                console.log(values.Bus);
                axios.post(config.api_url+"/getCarbonFootprint",{
                  "Car": values.Car,
                  "Bus" : values.Bus,
                  "Train" : values.Train,
                  "Tram" : values.Tram,
                  "Taxi" : values.Taxi
                }).then( (res) => {

                    console.log(res.data['c_emission']);
                    this.handleNext(res.data)
                }).catch(err => {
                  console.log(err);
                })

              }
            }
          >

          {

            ({values,errors,handleChange,handleSubmit}) =>
            (
              <View style={{flex:1}}>
                  <Block flex center style={{marginLeft:20,marginRight:20}}>
                      <Block flex center style={{justifyContent:'center'}} >
                        <Text h4 bold>Transport Means </Text>
                      </Block>
                      <Block flex={2} center >
                          {this.state.means.map ( (item,i) => (
                            <Block flex row center key={i}>
                                <Text p italic style={styles.styleText}>{item.name} </Text>
                                <Input placeholder="In KMs" rounded value={values[this.state.means[i].name]} onChangeText={handleChange(this.state.means[i].name)}/>
                            </Block>
                          ))}
                      </Block>
                      <Block flex center style={{justifyContent:'center'}}>

                            <Button radius={10} uppercase onPress={handleSubmit}>Next</Button>
                      </Block>
                    </Block>
              </View>
            )
          }
          </Formik>

        )}

}

const styles = StyleSheet.create({
    styleText:{
      backgroundColor:'#8BC34A',
      flexGrow:1,
      textAlign:'center',
      paddingTop:20,
      paddingBottom:20,
      marginRight:10
    }
})

export default TransportMeansScreen
