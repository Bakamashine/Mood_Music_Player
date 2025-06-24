import { size_slider } from "@/app/(tabs)";
import { Image, StyleSheet, View } from "react-native";
const SlideItem = () => (
    <View>
        <Image style={styles.img} source={require("../img/box.jpg")} />
    </View>    
)

export default SlideItem;

const styles = StyleSheet.create({
    img: size_slider
})