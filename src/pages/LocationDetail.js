import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { Character } from '../components/Character';
import { getCharacters } from '../redux/characters/actions';
import { getLocationDetail } from '../redux/locations/actions';
import Select from 'react-native-select-dropdown';
import styles from '../styles/main-styles';

export const LocationDetail = (props) => {
    const { params } = props.route;

    const residentIds = (residents) => {
        let ids = '';
        residents.forEach((resident, i) => {
            const temp = resident.split('/');
            ids += temp[temp.length - 1];
            if (i < residents.length - 1) ids += ',';
        });

        return ids;
    };

    const [filteredCharacters, setFilteredCharacters] = useState([]);

    const filters = ['All', 'Alive', 'Dead', 'Unknown'];

    const setFilters = (item, index) => {
        if (item === 'All') {
            setFilteredCharacters(props.character.characters);
            return;
        }
        if (item === 'Unknown') item = 'unknown'; // API returns 'unknown' not 'Unknown'
        setFilteredCharacters(props.character.characters.filter((c) => c.status === item));
        carousel.snapToItem(0);
    };

    useEffect(() => {
        props.getCharacters(residentIds(params.residents));
    }, []);

    useEffect(() => {
        setFilteredCharacters(props.character.characters);
    }, [props.character.characters]);

    let carousel;

    return (
        <View>
            {props.character.loading && (
                <ActivityIndicator style={styles.mt10} size={'large'} color={'#000000'} />
            )}
            {filteredCharacters && (
                <View>
                    <View style={[styles.filterRow, styles.mt10]}>
                        <Text style={styles.filterText}>Filter by status</Text>
                        <Select
                            buttonStyle={styles.selectBox}
                            data={filters}
                            onSelect={(item, index) => setFilters(item, index)}
                            defaultValue={'All'}
                            renderDropdownIcon={() => (
                                <FontAwesome
                                    style={{ marginRight: 10 }}
                                    name='angle-down'
                                    size={30}
                                />
                            )}
                            dropdownIconPosition={'right'}
                        />
                    </View>
                    <Carousel
                        data={[...filteredCharacters]}
                        renderItem={({ item, index }) => (
                            <Character
                                dimension={params.dimension}
                                navigation={props.navigation}
                                item={item}
                            />
                        )}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width}
                        layout={'default'}
                        ref={(c) => (carousel = c)}
                    />
                </View>
            )}
        </View>
    );
};

const mapStateToProps = (state) => ({
    location: state.location,
    character: state.character,
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    getLocationDetail: (id) => {
        dispatch(getLocationDetail(id));
    },
    getCharacters: (ids) => {
        dispatch(getCharacters(ids));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);
