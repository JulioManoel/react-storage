import { Image, StyleSheet, Text, View } from "react-native"

export default Avatar = ({ url, character, borderRadius = 100, size = 50 }) => {
  const profilePicture = {
    width: size, 
    height: size,
    borderRadius: borderRadius,
  }

  const avatar = { ...styles.avatar, fontSize: (size * 18) / 50}

  return (
    <View>
      {url ? (
        <Image src={url} style={profilePicture} />
      ) : (
        <View style={[profilePicture, styles.avatarView]}>
          <Text style={avatar}>{character}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  avatarView: {
    backgroundColor: '#D32828',
    justifyContent: 'center',
  },

  avatar: {
    fontWeight: 'bold',
    color: '#F5F5F5',
    textAlign: 'center',
  },
})