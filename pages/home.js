import React from 'react';
import { View, ImageBackground,Text} from 'react-native';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from '../styles';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = null;
    }

    fetchTour() {
        fetch('http://192.168.88.15:5000/read_tours')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    data: result.map(item => ({
                        id: item[0],
                        title: item[1],
                        description: item[2],
                        urltour: item[3],
                        image: item[4],
                    }))
                });
            }).catch(function(error){console.log(error)})
    }

    componentDidMount() {
        this.fetchTour(); 
    }

    render(){
        return (
            <View>
                <Header navigation= {this.props.navigation}/>
                <View>
                    <ImageBackground source={require("../assets/img/tourV1.png")} resizeMode="stretch" style={styles.image} imageStyle={styles.imageHome}>
                        <View style={styles.titleBtnHomeLeft}>  
                            <Text style={styles.titleBtnHome}>Exposición naturaleza y ritualidad</Text> 
                        </View>
                    </ImageBackground>
                    <ImageBackground source={require("../assets/img/tourV2-2.png")} resizeMode="stretch" style={{top:153}} imageStyle={styles.imageHome}>
                        <View style={styles.titleBtnHomeRigth}>
                            <Text style={styles.titleBtnHome}>Exposición Murciélagos: entre el mito y la realidad</Text>  
                        </View>
                    </ImageBackground>
                    <ImageBackground source={require("../assets/img/tour3.jpeg")} resizeMode="stretch" style={{top:306}} imageStyle={styles.imageHome}>
                        <View style={styles.titleBtnHomeLeft}>
                            <Text style={styles.titleBtnHome}> El Palacio Eterno: el Sexto Centenario de la Ciudad Prohibida</Text>  
                        </View>
                    </ImageBackground>
                </View>
                <Footer />
            </View>
        );
    }; 
};

export default Home;