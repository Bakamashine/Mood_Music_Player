import { Image, ImageProps, StyleSheet, Text, View } from "react-native";

interface FriendsProps {
  name: string;
  music_name: string;
  singer_name: string;
  image: ImageProps;
}

const Friends = ({
  name,
  music_name,
  singer_name,
  image,
}: FriendsProps) => (
  <View style={styles.container}>
    <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.music_name}>{music_name}</Text>
        <Text style={styles.singer_name}>{singer_name}</Text>
    </View>
    <View>
        <Image style={styles.img} source={image} />
    </View>
  </View>
);

export default Friends;

const styles = StyleSheet.create({
  name: {
    color: "#2C59FB",
    fontSize: 16,
  },
  singer_name: {
    color: "#757575",
    fontSize: 13,
  },
  music_name: {
    fontSize: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  img: {
    borderRadius: 1000,
    width: 60,
    height: 60
  }

});
