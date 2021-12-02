import React from 'react';
import { View, TouchableOpacity, Text, Linking} from 'react-native';
import Header from '../components/header';
import styles from '../styles';
import Footer from '../components/footer';

class Tour extends React.Component {

    constructor(props) {
        super(props);
        this.state = null;
    }

    
    componentDidMount() {
        try {
            this.setState(this.props.route.params);
        } catch (error) {
            console.log(error);
        }
        
    }

   
    render(){
        return (
            <View>
                <Header navigation= {this.props.navigation}/>
                {this.state !== null ? 
                    <View style= {{height:0}}>
                        <View style={styles.containerTitleTour}>
                            <Text style={styles.txtTittleTour}>{this.state.title}</Text>
                        </View>
                        
                        <Text style={styles.txtDescriptionTour}>{this.state.description}</Text>
                        <TouchableOpacity style={styles.btnLinkTour} onPress={()=>{ Linking.openURL(this.state.urltour)}}>
                            <Text style={styles.txtBtnTour}>Ir al tour</Text> 
                        </TouchableOpacity>
                    </View> : <View/>}
                <Footer />
            </View>
        );
    }; 
};

export default Tour;