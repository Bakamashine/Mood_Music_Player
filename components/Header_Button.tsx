import Icon from '@expo/vector-icons/FontAwesome';
import { FC } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps
} from "react-native";

interface HeaderButtonInterface extends TouchableOpacityProps {
  new_image: string;
}

const Header_Button: FC<HeaderButtonInterface> = ({ new_image, ...rest }) => {
  return (
    <TouchableOpacity {...rest} style={styles.button}>
      {/* <Image source={new_image} /> */}
      {/* <Svg width={30} height={30} viewBox="0 0 24 24">
        <Path d={new_image} fill="currentColor" />
      </Svg> */}
    
        <Icon name={new_image} />
    </TouchableOpacity>
  );
};

export default Header_Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "white",
  },
});
