import React from 'react';
import { Button, Image, View } from 'react-native';
import styles from '../../styles/main-styles';

const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Image style={styles.navbarLogo} source={require('../../../assets/Rick_and_Morty.png')} />
        </View>
    );
};

export default Navbar;
