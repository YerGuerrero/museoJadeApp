import React from 'react';
import {Button} from 'react-native';

const fetchLocation = props => {
  return (
    <Button title="Learn More" color="#841584" onPress={props.onGetLocation} />
  );
};

export default fetchLocation;
