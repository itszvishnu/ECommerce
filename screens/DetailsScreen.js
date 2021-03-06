import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constant/color'
import { Icon } from 'react-native-elements'
import product from '../constant/product';
import { TouchableOpacity } from 'react-native-web'
import HomeScreen from './HomeScreen'
import { Button } from 'react-native-elements/dist/buttons/Button'

const DetailsScreen = ({navigation,route}) => {
    const product = route.params;
    
    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.white}}>
            <View style={styles.header}>
                <Icon name="shopping-cart" size={28} />
            </View>
            <View style={styles.imageContainer}>
                <Image source={product.img} style={{resizeMode:"contain", flex:1}}/>
            </View>
            <View style={styles.detailsContainer}>
                <View style={{marginLeft:20,flexDirection:'row',alignItems:'flex-end'}}>
                    <View style={styles.line}/>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>Best Choice</Text>
                </View>
                <View style={{marginLeft:20,marginTop:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:22,fontWeight:'bold'}}>{product.name}</Text>
                    <View style={styles.priceTag}>
                        <Text style={{marginLeft:15,color:COLORS.white,fontWeight:'bold',fontSize:16,}}>
                            RS {product.price}
                        </Text>
                    </View>
                </View>
                <View style={{paddingHorizontal:20,marginTop:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold',}}></Text>
                    <Text style={{color:'grey', fontSize:16,lineHeight:22,marginTop:10}}>{product.about}</Text>
                    <View style={{marginTop:20, flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={styles.borderBtn}>
                                <Text style={styles.borderBtnText}>-</Text>
                            </View>
                            <Text style={{fontSize:20,marginHorizontal:10,fontWeight:'bold',}}>1</Text>
                            <View style={styles.borderBtn}>
                                <Text style={styles.borderBtnText}>+</Text>
                            </View>
                        </View>
                        <View style={styles.buyBtn}>
                        <Button  title="Buy"  
                       onPress={() => navigation.navigate('Payments')}/>
                        {/* <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                            Buy
                         </Text>  */}
                        </View> 
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}





const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },
    imageContainer:{
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 0.55,
        backgroundColor: COLORS.light,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30,
    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: COLORS.dark,
        marginBottom: 5,
        marginRight: 3,
      },
      borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
      },
      borderBtnText: {fontWeight: 'bold', fontSize: 28},
      buyBtn: {
        width: 130,
        height: 50,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
      },
      priceTag: {
        backgroundColor: COLORS.green,
        width: 80,
        height: 40,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
      },
});



export default DetailsScreen


