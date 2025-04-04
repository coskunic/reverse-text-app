import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const MAX_INPUT_LENGTH = 50;

export default function TabIndexScreen() {
  const [inputText, setInputText] = useState<string>("");
  const [reversedText, setReversedText] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleReversePress = () => {
    Keyboard.dismiss();
    setErrorMessage("");

    if (inputText.length > MAX_INPUT_LENGTH) {
      const errorMsg = `Metin en fazla ${MAX_INPUT_LENGTH} karakter olabilir.`;
      setErrorMessage(errorMsg);
      setReversedText("");
      return;
    }

    if (inputText.trim().length === 0) {
      setReversedText("");
      return;
    }

    const reversed = inputText.split("").reverse().join("");
    setReversedText(reversed);
  };

  const handleClearPress = () => {
    Keyboard.dismiss();
    setInputText("");
    setReversedText("");
    setErrorMessage("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Metin Ters Çevirme Sihirbazı</Text>

          <TextInput
            style={styles.input}
            placeholder="Ters çevirmek istediğiniz metni yazın..."
            value={inputText}
            onChangeText={setInputText}
            maxLength={MAX_INPUT_LENGTH + 5}
            testID="text-input"
            accessibilityLabel="Ters çevrilecek metni girin"
            placeholderTextColor="#999"
          />

          {errorMessage ? (
            <Text
              style={styles.errorText}
              testID="error-message"
              accessibilityRole="alert"
            >
              {errorMessage}
            </Text>
          ) : null}

          <View style={styles.buttonContainer}>
            <Button
              title="Ters Çevir"
              onPress={handleReversePress}
              testID="reverse-button"
              accessibilityLabel="Girilen metni ters çevirme işlemini başlat"
              color={Platform.OS === "ios" ? "#007AFF" : undefined}
            />
            <Button
              title="Temizle"
              onPress={handleClearPress}
              color="#FF3B30"
              testID="clear-button"
              accessibilityLabel="Metin girişini ve sonucu temizle"
            />
          </View>

          {reversedText ? (
            <View style={styles.resultContainer}>
              <Text style={styles.resultLabel}>Ters Çevrilmiş Hali:</Text>
              <Text
                style={styles.resultText}
                testID="reversed-text-output"
                selectable={true}
              >
                {reversedText}
              </Text>
            </View>
          ) : (
            <View style={styles.resultContainerPlaceholder} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  container: {
    flex: 1,
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderColor: "#DDD",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    color: "#333",
  },
  errorText: {
    width: "100%",
    color: "#D92626",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 15,
    minHeight: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  resultContainerPlaceholder: {
    marginTop: 20,
    padding: 15,
    minHeight: 60,
    width: "100%",
  },
  resultLabel: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
    fontWeight: "500",
  },
  resultText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
  },
});
