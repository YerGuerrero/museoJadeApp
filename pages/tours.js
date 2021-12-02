import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import BtnTour from '../components/btn';
import Header from '../components/header';
import styles from '../styles';
import Footer from '../components/footer';


class Tours extends React.Component {

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
                <View style={{flexDirection: "row", justifyContent: "center", height:0 ,flexWrap: 'wrap'}}>
                    {this.state !== null ?
                        this.state.data.map((tour,index) => {
                            return (
                                <BtnTour navigation= {this.props.navigation} key = {`tour-${index}`} id={tour.id} title={tour.title} description={tour.description} linktour={tour.urltour} image={tour.image} style={styles.image}></BtnTour>
                            );
                        }) : <View/>}
                    
                </View>
                <Footer />
            </View>
        );
    }; 
};

export default Tours;