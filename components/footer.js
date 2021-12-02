import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking} from 'react-native';

import styles from '../styles';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={styles.footer}>
                 <View style={styles.icons}>
                    <TouchableOpacity style={{alignContent: "space-between",paddingLeft: 10,paddingRight: 5}} onPress={()=>{ Linking.openURL('https://www.facebook.com/insmuseodeljade/?ref=hl')}}>
                        <Image source={require('../assets/img/facebook.png') }/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignContent: "space-between",paddingLeft: 10,paddingRight: 5}} onPress={() => Linking.openURL('https://www.instagram.com/museodeljadecr/')}>
                        <Image source={require('../assets/img/instagram.png') }/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignContent: "space-between",paddingLeft: 10,paddingRight: 5}} onPress={() => Linking.openURL('https://twitter.com/MuseodelJadeCR')}>
                        <Image source={require('../assets/img/twitter.png') }/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignContent: "space-between",paddingLeft: 10,paddingRight: 5}} onPress={() => Linking.openURL('https://www.youtube.com/channel/UC67vHLVJfUtyC_Lik981WZw')}>
                        <Image source={require('../assets/img/youtube.png') }/>
                    </TouchableOpacity>
                 </View>
                <Text style={styles.txtfooter}>Copyright© Museo del Jade 2021 - All rights reserved</Text>
              
            </View>
        );
    };
}; 

export default Footer;