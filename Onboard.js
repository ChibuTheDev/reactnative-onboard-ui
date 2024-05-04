import { StatusBar } from 'expo-status-bar';
import colors from './assets/colors';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SafeAreaView, StyleSheet, Text, Image, View} from 'react-native';
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from '@expo-google-fonts/open-sans';


const data = [
  {
    title: 'Save time by tracking your studies',
    text: 'Schedule your classes, assignments, quizzes and more',
    image: require('./assets/images/one.png'),
    bg: '#59b2ab',
  },
  {
    title: 'Stay on top of your education',
    text: 'Reduce your stress, increase your productivity',
    image: require('./assets/images/two.png'),
    bg: '#febe29',
  },
  {
    title: 'Spend more time doing the things you love',
    text: "Get started within five minutes",
    image: require('./assets/images/three.png'),
    bg: '#22bcb5',
  },
];








export default function Onboard({handleDone}) {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });
   
  if(!fontsLoaded){
    return <Text>Loading...</Text>
  }


  function renderItem({ item }) {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  }


  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  }

  const renderDoneButton = () => {
    return (
      <View style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>Done</Text>
      </View>
    );
  }

  

  function keyExtractor(item){
    return(item.title);
  }

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" />
    <AppIntroSlider
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      data={data}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      renderPrevButton={renderPrevButton}
      showPrevButton
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      onDone={handleDone}
      
    />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginVertical:60,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'OpenSans_700Bold',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 14,
    color: colors.grey,
    textAlign: 'center',
    fontFamily: 'OpenSans_600SemiBold',
    marginHorizontal: 20,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  doneButtonText: {
    fontSize: 14,
    marginRight: 20,
    fontFamily: 'OpenSans_600SemiBold',
    textAlign: 'center',
    color: colors.blue,},
  
    leftTextWrapper: {
      width: 40,
      height: 40,
      marginLeft: 20,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    leftText: {
      color: colors.blue,
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 14,
    },  
    rightTextWrapper: {
      width: 40,
      height: 40,
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    rightText: {
      color: colors.blue,
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 14,
    },  
    dotStyle: {
      backgroundColor: colors.blueFaded,
    },
    activeDotStyle: {
      backgroundColor: colors.blue,
    },

});
