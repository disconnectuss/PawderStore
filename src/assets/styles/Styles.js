import {Dimensions, StyleSheet} from 'react-native';
// productCard
export const CardStyles = StyleSheet.create({
  card: {
    gap: 8,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 8,
    padding: 5,
    margin: 8,
    shadowColor: '#b2b2b2',
    width: 150,
    height: 200,
    marginHorizontal: 5,
    marginTop: 5,
    shadowOpacity: 0.3,
  },

  imgWrapper: {
    position: 'relative',
    justifyContent: 'center',
    flex: 4,
    borderWidth: 0.5,
    borderColor: 'lightgray',
  },

  cardImg: {
    height: '80%',
    width: '100%',
    padding: 10,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    shadowColor: '#b2b2b2',
    objectFit: 'contain',
    shadowOpacity: 0.3,
  },

  content: {
    flex: 3,
    gap: 3,
  },

  prevPrice: {
    fontStyle: 'normal',
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: '#878f99', // gray
  },
  priceWrapper: {
    flexDirection: 'row',
    gap: 2,
  },

  price: {
    fontStyle: 'normal',
    fontSize: 12,
    color: '#ff7b25', // orange
  },
  brand: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  name: {
    fontStyle: 'normal',
    fontSize: 12,
  },
  amount: {
    color: '#878f99', // gray
    fontSize: 12,
  },
  plusIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 17,
    zIndex: 10,
    backgroundColor: '#ff8503',
    borderRadius: 15,
    shadowOpacity: 0.5,
  },
  starIcon: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignContent: 'center',
    position: 'absolute',
    top: 10,
    left: 3,
    zIndex: 10,
    borderRadius: 5,
    shadowOpacity: 0.5,
    backgroundColor: '#FFD580',
    padding: 1,
  },
});
// productWrapper
export const ProductWrrapper = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});
// carousel
export const {width} = Dimensions.get('window');
export const CarouselStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
});
// categoryStyles
export const CategoryStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 15,
    gap: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    gap: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 15,
    marginRight: 10,
    marginBottom: 20,
  },
  categoryImg: {
    objectFit: 'cover',
    width: 80,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#666',
    fontSize: 20,
  },
});
