import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

export default SocialButton = (props) => {
  return (
    <View style={styles.socialButton}>
      <TouchableOpacity style={styles.socialButton} onPress={props.onPress}>
        <Image style={styles.socialImage} source={props.source} onPress={props.onPress} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  socialButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9B9B9B',
    borderRadius: 10,
    width: 100,
    height: 60,
  },

  socialImage: {
    width: 35,
    height: 35
  },
})