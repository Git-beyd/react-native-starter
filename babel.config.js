<<<<<<< HEAD
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['nativewind/babel'],
=======
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
>>>>>>> 4a5e71758e0938739c09823d88cf95a3562a1d0b
};
