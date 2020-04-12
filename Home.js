import React from 'react';
import { StyleSheet, Text, View, Image, FlatList,ScrollView} from 'react-native';
import BookData from './BookData.json';
import Footer from './Footer';

import { TouchableOpacity } from 'react-native-gesture-handler';
let i=0;
const Home = ({navigation}) =>{
  return (
    <View>
      <View style={styles.header} >
        <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
          <Image source={require('./image/mobile.png')}
          style={styles.hamburger}
          />
          </TouchableOpacity>
          <Text style={styles.title}>My Book</Text>
          <Image source={require('./image/search.png')}
          style={styles.search}
          />
        </View>
      <ScrollView >
      <FlatList
      data={BookData}
      renderItem={({item}) => 
      <BooKDetail 
        book={item}
        
      />}
      keyExtractor={item => item.title}
      
      />
      
        <Text style={styles.bar}></Text>
        <Text style={styles.ratebarstyle}></Text>
      </ScrollView>
      <Footer/>
    </View>
  );
}

export default Home;

const BooKDetail = ({ book }) => {
  if (i===0) {
    styles.ratedatastyle = styles.ratedatastyle;
    i++;
  }else if(i===1){
    styles.ratedatastyle = styles.ratedatastyle1;
    i++;
  }else {
    styles.ratedatastyle = styles.ratedatastyle2;
    i++;
  }
  return (
    <View style={styles.container}>
      <View style={styles.imagestyle}>
        <Image source={{uri: book.image}}
        style={{width:93,height:140,margin:0,}}/>
      </View>
      <View>
        <Text style={styles.titlestyle}>{book.title}</Text>
        <Text style={styles.artiststyle}>{book.artist}</Text>
        <Text style={styles.introstyle}>{book.intro}</Text>
        <Text style={styles.ratestyle}></Text>
        
        <Text style={styles.ratedatastyle}>{book.rate}</Text>

      </View>
    </View>
  )
};

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
  },

  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    flexDirection:"row",
    borderColor:"#b1b1b1",
    borderBottomWidth:1,
    borderTopWidth:1,
    
    
  },
  imagestyle:{
    width:99,
    height:146,
    backgroundColor:"white",
    shadowColor:"#000",
    padding:3,
    shadowOpacity:0.3,
    shadowRadius:3,
    elevation:1,
    marginTop:12,
    marginLeft:15,
    marginBottom:12,
    marginRight:24,
    
  },
  titlestyle:{
    lineHeight:24,
    marginTop:28,
    fontSize:18,
    color:"#2e2e2e",
    //fontFamily:"sans-serif",
  },
  artiststyle:{
    lineHeight:24,
    marginTop:11,
    fontSize:14,
    color:"#717171",
    //fontFamily:"sans-serif",
  },
  introstyle:{
    lineHeight:12,
    width:194,
    marginTop:11,
    fontSize:12,
    color:"#b1b1b1",
    //fontFamily:"sans-serif",
  },
  ratestyle: {
    width:194,
    height:3,
    backgroundColor:"#c3c3c3",
    borderRadius:10,
    marginTop:10,
    marginBottom:0,
  },
  bar:{
    width:97,
    height:3,
    backgroundColor:"#70b4a1",
    borderRadius:500,
    marginTop:-383,
    marginLeft:138,
    
  },
  ratebarstyle: {
    width:194,
    height:3,
    backgroundColor:"#70b4a1",
    borderRadius:500,
    marginTop:341,
    marginLeft:138,
    marginBottom:51,
    
  },
  ratedatastyle: {
    lineHeight:16,
    marginTop:9,
    fontSize:12,
    color:"#b1b1b1",
    //fontFamily:"sans-serif",
  },
  ratedatastyle1: {
    lineHeight:16,
    marginTop:9,
    fontSize:12,
    color:"#ff6767",
    //fontFamily:"sans-serif",
  },
  ratedatastyle2: {
    lineHeight:16,
    marginTop:9,
    fontSize:12,
    color:"#b1b1b1",
    //fontFamily:"sans-serif",
  },
  back:{
    width:360,
    height:172,
    backgroundColor:"#f0f0f0",
    marginTop:-516,
    borderColor:"#b1b1b1",
    borderBottomWidth:1,
    borderTopWidth:1,
  }
});