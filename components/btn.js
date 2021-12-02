import React from 'react';
import styles from '../styles';
import { Text, View , ImageBackground, TouchableOpacity} from 'react-native';
 

const BtnTour = props =>{
    const handleClickTour = () => {
        props.navigation.navigate('Tour',{id: props.id,
            title: props.title,
            description: props.description,
            urltour: props.linktour,
            image: props.image});
    };

    return (
        <TouchableOpacity style={styles.btnTour} onPress={handleClickTour}>
            <ImageBackground source={props.image=="tourV1.jpg"? require('../assets/img/tour1.jpg'):
            props.image=="tour2.png"?require('../assets/img/tour2.png'):require('../assets/img/tour3.jpeg')} resizeMode="cover" style={props.style} imageStyle={{borderRadius:15}}>
                <View style={styles.titleBtnTour}>
                    <Text style={styles.littletitle}>Tour Virtual</Text>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
        

}
export default BtnTour;