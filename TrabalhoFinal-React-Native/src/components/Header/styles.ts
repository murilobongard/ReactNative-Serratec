import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textWhite: {
    color: '#fff',
    letterSpacing: 0,
  },
  header: {
    position: 'absolute',
    top: 0,
    zIndex: 999,
    width: '100%',
  },
  headerSafeAreaView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
    height: 100,
    paddingTop: 20,
  },
});

export default styles;
