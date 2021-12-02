import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from '../styles';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={{top:25}}>
                <Image source={require('../assets/img/logo.png') } style={styles.logo}/>
                <View style={{flexDirection:"row",justifyContent: "center", paddingBottom:60, top:10}}>  
                    <TouchableOpacity style={{justifyContent: "center",    paddingLeft: 15,paddingRight: 150}} onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={require('../assets/img/Vector.png') }/>
                        <Text style={{right: 4.5}} >Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent: "center", paddingLeft: 4,paddingRight: 20}} onPress={() =>
            this.props.navigation.navigate('Tours')}>
                        <Image source={require('../assets/img/iconoTour.png')}/>
                        <Text style={{right: 4.5}}>Tours</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}; 

export default Header;