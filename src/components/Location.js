import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { getLocationDetail } from '../redux/locations/actions';
import styles from '../styles/main-styles';

export const Location = (props) => {
    const { item } = props;

    return (
        <Pressable
            style={styles.card}
            onPress={() =>
                props.navigation.navigate('LocationDetail', {
                    id: item.id,
                    residents: item.residents,
                    dimension: item.dimension,
                })
            }
            disabled={!item.residents.length}
        >
            <View style={styles.cardContent}>
                <View style={styles.row}>
                    <View style={styles.w90}>
                        <Text>
                            <Text style={styles.boldText}>Name:</Text> {item.name}
                        </Text>
                        <Text>
                            <Text style={styles.boldText}>Type:</Text> {item.type}
                        </Text>
                        <Text>
                            <Text style={[styles.boldText]}>Dimension: </Text>
                            {item.dimension}
                        </Text>
                        <Text>
                            <Text style={styles.boldText}>Resident Count: </Text>
                            {item.residents.length}
                        </Text>
                    </View>
                    <View style={styles.cardButton}>
                        <Pressable
                            onPress={() =>
                                props.navigation.navigate('LocationDetail', {
                                    id: item.id,
                                    residents: item.residents,
                                    dimension: item.dimension,
                                })
                            }
                            disabled={!item.residents.length}
                        >
                            <FontAwesome style={styles.f30} name='angle-right' size={60} color={item.residents.length ? '#000000': '#888888'} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

const mapStateToProps = (state) => ({
    location: state.location,
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    getLocationDetail: (id) => {
        dispatch(getLocationDetail(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);
