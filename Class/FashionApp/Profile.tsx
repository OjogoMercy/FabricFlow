import { Ionicons,FontAwesome,AntDesign } from '@expo/vector-icons'
import { Image, Text, TextInput, TouchableOpacity, View,FlatList, SafeAreaView } from 'react-native'
import { FontAwesome5, Feather, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import Header from './Components/Header'
import general from './Components/General'
import Colors from './Components/Colors'
const Profile = () => {
  const iconFamilies: Record<string, any> = {FontAwesome5,Feather,FontAwesome6, Ionicons, MaterialCommunityIcons};

  const data = [
    { icon: 'person', text: 'Personal Data', iconFamily: 'Ionicons' },
    { icon: 'settings', text: 'Settings', iconFamily: 'Ionicons' },
    { icon: 'document-text', text: 'E-Statement', iconFamily: 'Ionicons' },
    { icon: 'heart', text: 'Referral Code', iconFamily: 'Ionicons' },
    { icon: 'dots-horizontal-circle', text: 'FAQ', iconFamily: 'MaterialCommunityIcons' },
    { icon: 'pencil-alt', text: 'Our Handbook', iconFamily: 'FontAwesome5' },
    { icon: 'account-group', text: 'Community', iconFamily: 'MaterialCommunityIcons' },
  ];
  return (
    <View style={general.container1}>
      <Header title='Profile'/>
      <Image source={{uri:'https://img.freepik.com/free-photo/young-beautiful-african-american-afro-woman-with-curly-hair-wearing-blue-turtleneck-sweater-looking-confident-camera-with-smile-with-crossed-arms-hand-raised-chin-thinking-positive_839833-30965.jpg?ga=GA1.1.1815210685.1744673214&semt=ais_items_boosted&w=740'}} style={general.profile}/>
      <Text style={{textAlign:'center',fontSize:15,fontWeight:'bold'}}> Ojogo Mercy</Text>
      <Text style={{textAlign:"center",color:'#222'}}>mercyojogo@gmail.com</Text>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item,index }) => {
          const Icon = iconFamilies[item.iconFamily];
          return (
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,alignItems:'center'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:'#ccc',height:50,width:50,borderRadius:10,alignItems:'center',justifyContent:'center'}} activeOpacity={0.5}>
                <Icon name={item.icon} size={22} color={Colors.primary}/>
                </TouchableOpacity>
              <Text style={ { marginLeft: 10,fontSize:14,fontWeight:'bold' }}>{item.text}</Text>
            </View>
          <AntDesign name="right" size={12} color={'black'}/> 
            </View>
          );
        }}
      />
    </View>
  )
}

export default Profile

