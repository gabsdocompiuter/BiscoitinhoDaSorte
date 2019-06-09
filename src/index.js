import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';

import Frases from './frases';

export default class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            frase: ''
        }
    }

    biscoitoOnPress = () => {
        this.setState({
            frase: Frases()
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.biscoitoOnPress}
                >
                    <Image source={require ('./img/biscoitoSorte.png')}></Image>
                </TouchableOpacity>

                <View style={styles.fraseView}>
                    <Text style={styles.frase}>{this.state.frase}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    fraseView: {
        marginTop: 20
    },

    frase: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
    },

});