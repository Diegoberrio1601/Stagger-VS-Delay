import React, { useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Animated,
  TouchableOpacity,
  Text,
  
} from "react-native";

export default function App() {
  // Referencias para `stagger`
  const translateY1 = useRef(new Animated.Value(0)).current;
  const translateY2 = useRef(new Animated.Value(0)).current;
  const scale1 = useRef(new Animated.Value(1)).current;
  const scale2 = useRef(new Animated.Value(1)).current;

  // Referencia para `delay`
  const translateX = useRef(new Animated.Value(0)).current;

  // Animación con stagger
  const handleStagger = () => {
    Animated.stagger(1000, [
      Animated.parallel([
        Animated.timing(translateY1, {
          toValue: -100,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scale1, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(translateY2, {
          toValue: -100,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scale2, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      // Regresa a la posición inicial
      translateY1.setValue(0);
      scale1.setValue(1);
      translateY2.setValue(0);
      scale2.setValue(1);
    });
  };

  // Animación con delay
  const handleDelay = () => {
    Animated.sequence([
      Animated.delay(1000), // Espera 1 segundo antes de iniciar
      Animated.timing(translateX, {
        toValue: 150,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Regresa a la posición inicial
      translateX.setValue(0);
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F29F58" }}>
    <View style={styles.container}>
      
      <Text style={styles.title}>
        Para ejecutar varias animaciones con un desfase entre sí.
      </Text>
      <TouchableOpacity onPress={handleStagger} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Stagger</Text>
      </TouchableOpacity>

      
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ translateY: translateY1 }, { scale: scale1 }],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ translateY: translateY2 }, { scale: scale2 }],
          },
        ]}
      />

      
      <TouchableOpacity onPress={handleDelay} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Delay</Text>
      </TouchableOpacity>

      
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ translateX }],
            backgroundColor: "#441752", 
            marginTop: 20, 
          },
        ]}
      />
      <Text style={styles.title}>
        Para esperar antes de comenzar una animación específica.
      </Text>
      <View style={styles.footer}>
          <Text style={styles.footerText}>@Diegoberrio1601</Text>
        </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B1833",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 30,
  },
  button: {
    backgroundColor: "#F29F58",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#AB4459",
    marginVertical: 10,
  },
  footer: {
    position: "absolute",
    bottom: "2%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
