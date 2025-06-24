import Friends from "@/components/friends";
import Header from "@/includes/Header";
import { renderItem } from "@/utils/render-item";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
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

const Main = () => {
  const progress = useSharedValue<number>(0);
  const ref = React.useRef<ICarouselInstance>(null);
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <View style={styles.context}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header />

        {/* Carousel */}
        <View style={styles.context__wrapper}>
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
          </View>

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

          {/* Friends Likes */}
          <View style={styles.friends}>
            <Text style={styles.friends__h1}>Friends Like</Text>
            <View style={styles.friends__container}>
              {new Array(6).fill(null).map((item, index) => (
                <View key={index} style={styles.friends__container__wrapper}>
                  <Friends
                    image={require("../../img/box.jpg")}
                    name="Ivan Philippowitch"
                    singer_name="Kurt Kobein"
                    music_name="In Bloom"
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  context: {
    flex: 1,
  },
  context__wrapper: {
    padding: 10,
  },
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
  friends: {
    borderRadius: 15,
    backgroundColor: "white",
    padding: 20,
    marginTop: 20,
  },
  friends__h1: {
    fontSize: 32,
    fontWeight: "bold",
  },
  friends__container: {
    marginTop: 20,
  },
  friends__container__wrapper: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
  },
  scroll: {
    // flex: 1,
    flexGrow: 1,
  },
});
