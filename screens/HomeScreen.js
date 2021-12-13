import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'
import COLORS from '../constant/color';
import product from '../constant/product';

const width = Dimensions.get("screen").width/2-30;
const HomeScreen = ({navigation}) => {
  const categories = ['Electronics'];

  const [categoryIndex, setCategoryIndex] = React.useState(0)

  const CategoryList = () => {
    return <View style= {styles.categoryContainer}>
      {categories.map((item,index)=> (
        <TouchableOpacity  
        key={index} 
        activeOpacity={0.8}
        onPress={() => setCategoryIndex(index)
        }>
          <Text style={[styles.categoryText, categoryIndex== index && styles.categoryTextSelected]}>
            {item}
          </Text>
        </TouchableOpacity>
        
      ))}
    </View>
  };

  const Card = ({product}) => {
   return( 
     <TouchableOpacity onPress={() => navigation.navigate("Details", product)}> 
       <View style={styles.card}>
     <View style={{alignItems: 'flex-end'}}>
       <View style={{width:30, 
       height:30, 
       borderRadius:15, 
       alignItems:"center",
       justifyContent:"center",
       backgroundColor: product.like 
       ? 'rgba(245, 42, 42,0.2)'
       : 'rgba(0,0,0,0.2) ',
      }}>
       <Icon name="favorite" size={18} color={product.like ? COLORS.red : COLORS.black}/>
       </View>
       
     </View>
     <View style={{height:100 ,alignItems:"center"}}>
         <Image style={{flex:1, resizeMode:'contain'}}
         source = {product.img}
         />
       </View>
       <Text style={{fontWeight:'bold',fontSize:17,marginTop:10}}>
         {product.name}
       </Text>
       <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
         <Text style={{fontSize:19,fontWeight:'bold'}}>RS {product.price}</Text>
         <View style={{height:25,width:25,backgroundColor:COLORS.green,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',}}>
          <Text style={{fontSize:25,fontWeight:'bold',color:COLORS.white}}>+</Text>
        </View>
       </View>
   </View>
     </TouchableOpacity>
   );
  };
  return ( <SafeAreaView 
  style={{
    flex:1, 
    paddingHorizontal:10,
    backgroundColor:'white',
    }}>
        <View style={styles.header}>
          <View>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Welcome To</Text>
            <Text style={{fontSize:38, fontWeight:'bold', color:COLORS.green}}>Shop</Text>
          </View>
          <Icon name="shopping-cart" size={28}/>
        </View>
        <View style={{marginTop:30, flexDirection: 'row'}}>
          <View style={styles.searchContainer}>
            <Icon name="search" size={25} style={{marginLeft: 20}}/>
            <TextInput placeholder="Search" style={styles.input}/>
          </View>
          <View style={styles.sortBtn}>
            <Icon name="sort" size={30} color={COLORS.white}/>
          </View>
        </View>
        <CategoryList />
        <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={product}
        renderItem={({item}) => {
          return <Card product={item} />;
        }}
      />
  </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  header:{
    //marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer:{
    height:50,
    backgroundColor:COLORS.light,
    borderRadius:10,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input:{
    fontSize: 18,
    fontWeight:'bold',
    color:COLORS.dark,
    flex:1,
  },
  sortBtn:{
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer:{
    flexDirection: 'row',
    marginTop:30,
    marginBottom:20,
    justifyContent: 'space-between',
  },
  categoryText:{
    fontSize:15,
    color:'grey',
    fontWeight:'bold',
  },
  categoryTextSelected:{
    color:COLORS.green,
    padding:5,
    borderBottomWidth:2,
    borderColor: COLORS.green,  
  },
  card:{
    height:225,
    backgroundColor:COLORS.light,
    width,
    marginHorizontal:2,
    borderRadius:10,
    marginBottom:20,
    padding:15,
  },
})

export default HomeScreen


