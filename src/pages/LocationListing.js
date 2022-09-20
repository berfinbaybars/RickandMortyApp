import React, { Fragment, useEffect, useState } from 'react';
import { Button, FlatList, SafeAreaView, Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Location from '../components/Location';
import { getLocations } from '../redux/locations/actions';
import styles from '../styles/main-styles';

export const LocationListing = (props) => {
    const [page, setPage] = useState(1);
    const getMore = () => {
        if (page === 7) return;
        if (props.location.loading) return;
        let nextPage = page + 1;
        setPage(nextPage);
        props.getLocations(nextPage);
    };

    useEffect(() => {
        props.getLocations(page);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {props.location.locations && (
                <FlatList
                    data={props.location.locations}
                    style={{
                        width: '100%',
                        paddingVertical: 10,
                    }}
                    renderItem={(_props) => <Location {..._props} navigation={props.navigation} />}
                    keyExtractor={(item) => item.id}
                    onEndReached={getMore}
                    onEndReachedThreshold={0.3}
                    refreshing={props.location.loading}
                    extraData={props.location.locations}
                />
            )}
            {props.location.loading && (
                <ActivityIndicator style={styles.mt10} size={'large'} color={'#000000'} />
            )}
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => ({
    location: state.location,
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    getLocations: (page) => {
        dispatch(getLocations(page));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListing);
