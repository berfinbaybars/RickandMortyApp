import React from 'react';
import { Text, View, Image, Dimensions, Pressable } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles/main-styles';
import { FontAwesome } from '@expo/vector-icons';

export const Character = (props) => {
    const { item } = props;

    return (
        <View>
            <Pressable
                onPress={() =>
                    props.navigation.navigate('CharacterDetail', {
                        character: item,
                        dimension: props.dimension,
                    })
                }
            >
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
                        source={{ uri: item.image }}
                    />
                    <View style={styles.characterDetails}>
                        <View style={styles.row}>
                            <View style={[styles.col, styles.w90]}>
                                <Text style={[styles.characterName, styles.boldText]}>
                                    {item.name}
                                </Text>
                                <Text style={styles.characterStatus}>
                                    <FontAwesome
                                        name='circle'
                                        size={20}
                                        color={
                                            item.status === 'Alive'
                                                ? 'green'
                                                : item.status === 'Dead'
                                                ? 'red'
                                                : 'gray'
                                        }
                                    />
                                    {'   '}
                                    {item.status[0].toUpperCase() +
                                        item.status.slice(1).toLowerCase()}{' '}
                                    - {item.species}
                                </Text>
                            </View>
                            <FontAwesome style={styles.f30} name='angle-right' size={60} />
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

const mapStateToProps = (state) => ({
    character: state.character,
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Character);
