import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles/main-styles';
import { FontAwesome } from '@expo/vector-icons';

export const CharacterDetail = (props) => {
    const { character, dimension } = props.route.params;

    return (
        <View>
            <Image
                style={{
                    width: Dimensions.get('window').width - 30,
                    height: Dimensions.get('window').width,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    borderRadius: 5,
                    marginTop: 20,
                }}
                source={{ uri: character.image }}
            />
            <View style={styles.characterDetails}>
                <Text style={[styles.characterName, styles.w90, styles.boldText]}>
                    {character.name}
                </Text>
                <View style={[styles.characterDescription, styles.row]}>
                    <Text style={styles.characterStatus}>
                        <FontAwesome
                            name="circle"
                            size={20}
                            color={
                                character.status === 'Alive'
                                    ? 'green'
                                    : character.status === 'Dead'
                                    ? 'red'
                                    : 'gray'
                            }
                        />
                        {'   '}
                        {character.status[0].toUpperCase() +
                            character.status.slice(1).toLowerCase()}{' '}
                        - {character.species}
                    </Text>
                    <Text style={[styles.italicText, styles.characterOriginText]}>
                        {character.origin.name} / {character.gender}
                    </Text>
                </View>
                <Text style={[styles.italicText, styles.mt10]}>Dimension: {dimension}</Text>
            </View>
        </View>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
