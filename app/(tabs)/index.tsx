import My_Carousel from '@/components/carousel';
import Friends from "@/components/friends";
import Header from "@/includes/Header";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";


const Main = () => {
  return (
    <View style={styles.context}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header />

        {/* Carousel */}
        <View style={styles.context__wrapper}>
          <My_Carousel />

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
