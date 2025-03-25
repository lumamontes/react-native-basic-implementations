import Slider from "@/components/Slider";
import { ImageSlider } from "@/data/SliderData";
import { StyleSheet, Text, View } from "react-native";

const Page = () => {
  return(
    <View style={styles.container}>
      <Slider itemList={ImageSlider}/>
    </View>
  )
}
export default Page 

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    //alignItems:'center'
  }
});
