import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
// export const widthMul = Number((width/375).toFixed(2));
// export const heightMul = Number((height/667).toFixed(2));
export const widthMul = width;
// export const heightMul = Number((height/667).toFixed(2));
export const heightMul = height;

export default {
  window: {
    width,
    height,

  },
  isSmallDevice: width < 375,
};
