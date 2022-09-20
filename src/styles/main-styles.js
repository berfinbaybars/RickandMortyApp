import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    card: {
        borderColor: '#555555',
        borderRadius: 15,
        borderWidth: 2,
        marginBottom: 20,
        width: '90%',
        alignSelf: 'center',
    },
    cardContent: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    boldText: {
        fontWeight: 'bold',
    },
    navbar: {
        marginBottom: 20,
    },
    navbarLogo: {
        width: 200,
        height: 50,
        alignSelf: 'center',
    },
    cardButton: {
        alignSelf: 'center',
        marginLeft: 'auto',
    },
    characterName: {
        fontSize: 30,
        color: '#888888',
        maxWidth: '90%',
        minWidth: '90%'
    },
    characterDetails: {
        marginHorizontal: 15,
        marginTop: 10,
    },
    characterStatus: {
        fontSize: 20,
        alignSelf: 'flex-start',
    },
    selectBox: {
        borderWidth: 1,
        borderColor: '#555555',
        borderRadius: 20,
        marginRight: 15,
        alignSelf: 'center',
    },
    filterRow: {
        flexDirection: 'row',
        marginHorizontal: 15,
    },
    filterText: {
        alignSelf: 'center',
        fontSize: 20,
    },
    characterDescription: {
        fontSize: 20,
        alignSelf: 'flex-start',
    },
    italicText: {
        fontStyle: 'italic',
    },
    characterOriginText: {
        marginLeft: 30,
        fontSize: 12,
        flexWrap: 'wrap',
        flex: 3,
        textAlign: 'right',
        alignSelf: 'center'
    },
    mt10: {
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
    },
    w90: {
        maxWidth: '90%',
        minWidth: '90%', // width does not properly work sometimes
    },
    f30: {
        alignSelf: 'center',
        marginLeft: 'auto',
    },
    col: {
        flexDirection: 'column',
    },
});

export default styles;
