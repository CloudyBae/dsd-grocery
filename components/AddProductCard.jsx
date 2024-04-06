import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';

export default AddProductCard = (props) => {
  
const {onPress, title = '+' } = props;

    return(
        <View style={styles.container}>

            <View>
                <Image source={{
                    uri: 'https://m.media-amazon.com/images/I/61fZ+YAYGaL._SL1500_.jpg'
                }}
                        style={styles.productImg}/>
                
                <Text style={styles.headingText}>Organic Bananas</Text>
                <Text style={styles.amountText}>5pcs</Text>
                
                    <View style={styles.bottomCard}>
                        
                        <Pressable style={styles.addButton} onPress={props.onPress}>
                            <Text style={styles.buttonText}>{title}</Text>
                        </Pressable>
                            
                        

                    </View>            
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        
       padding: 10, 
        backgroundColor: '#fff',
        borderColor: '#e7e7e7',
        borderWidth: 1,
        borderRadius: 5,
        height: 248,
        width: 173,
        top: 0,
        left: 0,
        

    },
    productImg: {
    //    flex: 1,
    paddingHorizontal: 60,
        height: 110,
        width: 80,
    },
    headingText: {
        fontSize: 11,
        fontWeight: 'bold',
    },
    amountText:{
        fontSize: 10,
        paddingTop: 4,
    },
    addButton: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#53b175',
        borderColor: '#e7e7e7',
        borderRadius: 5,
        height: 50,
        width: 50,
        
    },

    buttonText:{
        
        

        fontSize: 24,
        color: '#ffffff'

    },
    bottomCard:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-end',
        paddingTop: 12,
        
        


    },

})
