import { Image, StyleSheet, Text, View } from 'react-native'

export default SocialButton = (props) => {
  return (
    <View style={styles.socialButton}>
      <Image style={styles.socialImage} source={props.source} />
    </View>
  )
}

const styles = StyleSheet.create({
  socialButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9B9B9B',
    width: 100,
    height: 60,
    borderRadius: 10
  },

  socialImage: {
    width: 35,
    height: 35
  },
})