import { Image, StyleSheet, View } from "react-native";
const SlideItem = () => (
    <View>
        <Image style={styles.img} source={require("../img/box.jpg")} />
    </View>    
)

export default SlideItem;

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 258
    }
})