import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


const Header = () => {
    return (
      <View style={styles.header}>
        <Image source={require('./image/mobile.png')}
        style={styles.hamburger}
        />
        <Text style={styles.title}>My Book</Text>
        <Image source={require('./image/search.png')}
        style={styles.search}
        />
      </View>
    );
  }
export default Header;

const styles = StyleSheet.create({
  header:{
    height:80,
    backgroundColor:"#00b49f",
    flexDirection:"row",
    
  },
  title:{
    width:279,
    textAlign:"center",
    lineHeight:24,
    color:"white",
    fontSize:20,
    //fontFamily:"sans-serif",
    marginTop:38.3,
  },
  hamburger: {
    width:40,
    height:40,
    marginTop:32,
    marginLeft:8,
  
   
  },
  search: {
    width:40,
    height:40,
    marginTop:32,
    marginRight:8,
  }


});