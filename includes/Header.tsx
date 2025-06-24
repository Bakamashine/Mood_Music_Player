import Header_Button from "@/components/Header_Button";
import { Image, StyleSheet, View } from "react-native";

const Header = () => (
  <View style={styles.header}>
    <View style={styles.header__image}>
      <Image style={styles.img} source={require("../img/box.jpg")} />
    </View>
    <View style={styles.buttons}>
      <View style={styles.buttons_wrapper}>
        <Header_Button new_image={"search"} />
        <Header_Button new_image="search" />
      </View>
    </View>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
    borderRadius: 1000,
  },
  header: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttons: {},
  buttons_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  header__image: {
    justifyContent: "center",
    alignItems: "center",
  },
});
