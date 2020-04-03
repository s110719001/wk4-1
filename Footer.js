import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Footer = () => {
    return(
        <View style={styles.footer}>
            <View style={styles.homebg}>
                <Image source={require('./image/home.png')}
                style={styles.home}
                />
                <Text style={styles.hometxt}>Home</Text>
            </View>
            <View style={styles.bookbg}>
                <Image source={require('./image/mybook.png')}
                style={styles.book}
                />
                <Text style={styles.booktxt}>My Book</Text>
            </View>
            <View style={styles.favoritebg}>
                <Image source={require('./image/favorites.png')}
                style={styles.favorite}
                />
                <Text style={styles.favoritetxt}>Favorites</Text>
            </View>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create ({
    footer:{
        height:56,
        flexDirection:"row",
        borderTopWidth:1,
        borderColor:"#b1b1b1",
        

    },
    homebg:{
        backgroundColor:"white",
        width:125,
        height:55,
    },
    home:{
        width:24,
        height:24,
        marginTop:6,
        marginLeft:50.5,
        justifyContent:"center",
        alignItems:"center",
    },
    hometxt:{
        fontSize:12,
        textAlign:"center",
        color:"#818181",
        lineHeight:18,
    },
    bookbg:{
        backgroundColor:"white",
        width:125,
        height:55,
    },
    book:{
        width:24,
        height:24,
        marginTop:6,
        marginLeft:50.5,
        marginBottom:0,
    },
    booktxt:{
        fontSize:12,
        textAlign:"center",
        color:"#00b49f",
        lineHeight:18,
    },
    favoritebg:{
        backgroundColor:"white",
        width:125,
        height:55,
    },
    favorite:{
        width:24,
        height:24,
        marginTop:6,
        marginLeft:50.5,
        marginBottom:0,
    },
    favoritetxt:{
        fontSize:12,
        textAlign:"center",
        color:"#818181",
        lineHeight:18,
    },
});