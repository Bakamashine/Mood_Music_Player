import { renderItem } from "@/utils/render-item";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";

const defaultDataWith6Colors = [
  "#B0604D",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

export const size_slider = {
  width: 350,
  height: 258,
};

const My_Carousel = () => {
  const progress = useSharedValue<number>(0);
  const ref = React.useRef<ICarouselInstance>(null);
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <View>
      <View
        id="carousel-component"
        // dataSet={{ kind: "utils", name: "pagination" }}
        style={styles.box_slider}
      >
        <Carousel
          ref={ref}
          {...size_slider}
          loop
          onProgressChange={progress}
          data={defaultDataWith6Colors}
          renderItem={renderItem({ rounded: true })}
          style={styles.slider}
        />
        <View style={styles.paginate}>
          <Pagination.Basic<{ color: string }>
            progress={progress}
            data={defaultDataWith6Colors.map((color) => ({ color }))}
            size={20}
            dotStyle={{
              borderRadius: 100,
              backgroundColor: "#262626",
            }}
            activeDotStyle={{
              borderRadius: 100,
              overflow: "hidden",
              backgroundColor: "#f1f1f1",
            }}
            containerStyle={[
              {
                gap: 5,
                marginBottom: 10,
              },
            ]}
            horizontal
            onPress={onPressPagination}
          />
        </View>
      </View>
    </View>
  );
};

export default My_Carousel;

export const styles = StyleSheet.create({
  paginate: {
    position: "absolute",
    right: "4%",
    // top: "16%",
    top: 20,
  },
  box_slider: {
    alignItems: "center",
  },
  slider: {
    borderRadius: 15,
  },
});
