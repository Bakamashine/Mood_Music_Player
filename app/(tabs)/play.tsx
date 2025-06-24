import My_Carousel from "@/components/carousel";
import { useAudioPlayer } from "expo-audio";
import { Button, StyleSheet, View } from "react-native";
const Play = () => {
  const player = useAudioPlayer(require("@/music/kino.mp3"));

  function playSound() {
    if (player.playing) {
        player.pause()
        console.log("Поставилась пауза")
        player.paused = true;
        console.log("Paused: " , player.paused)
    }
    else if (player.paused) {
        player.play()
        console.log("Произошёл запуск песни")
        player.paused = false
    }
    else {
      player.seekTo(0);
      player.play();
      console.log("Произошёл первоначальный запуск песни")
    }
    
  }
  return (
    <View style={styles.container}>
      {/* Carousel */}
      <View style={styles.carousel}>
        <My_Carousel />
      </View>

      {/* Player */}
      <View style={styles.player}>
        <Button onPress={playSound} title="Play" />
      </View>
    </View>
  );
};

export default Play;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
  },
  carousel: {
    marginTop: 10,
  },
  player: {},
});
