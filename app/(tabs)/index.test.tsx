import React from "react";
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";

import TabIndexScreen from "./index";

describe("<TabIndexScreen /> Testleri", () => {
  const setup = () => render(<TabIndexScreen />);

  it("Başlangıç bileşenlerini doğru şekilde render eder", () => {
    setup();

    expect(screen.getByTestId("text-input")).toBeTruthy();

    expect(screen.getByTestId("reverse-button")).toBeTruthy();
    expect(screen.getByTestId("clear-button")).toBeTruthy();

    expect(screen.queryByTestId("reversed-text-output")).toBeNull();
  });

  it("Metin girilip butona basıldığında metni ters çevirir ve gösterir", () => {
    setup();
    const input = screen.getByTestId("text-input");
    const reverseButton = screen.getByTestId("reverse-button");

    fireEvent.changeText(input, "Merhaba");
    fireEvent.press(reverseButton);

    const resultOutput = screen.getByTestId("reversed-text-output");
    expect(resultOutput).toHaveTextContent("abahreM");

    fireEvent.changeText(input, "React Native");
    fireEvent.press(reverseButton);
    expect(resultOutput).toHaveTextContent("evitaN tcaeR");
  });

  it('"Temizle" butonuna basıldığında input ve sonucu temizler', () => {
    setup();
    const input = screen.getByTestId("text-input");
    const reverseButton = screen.getByTestId("reverse-button");
    const clearButton = screen.getByTestId("clear-button");

    fireEvent.changeText(input, "Test");
    fireEvent.press(reverseButton);
    expect(screen.getByTestId("reversed-text-output")).toHaveTextContent(
      "tseT"
    );
    expect(input.props.value).toBe("Test");
    fireEvent.press(clearButton);

    expect(input.props.value).toBe("");
    expect(screen.queryByTestId("reversed-text-output")).toBeNull();
  });

  it("Maksimum uzunluk aşıldığında hata mesajı gösterir ve sonucu çevirmez", () => {
    setup();
    const input = screen.getByTestId("text-input");
    const reverseButton = screen.getByTestId("reverse-button");
    const longText = "a".repeat(51);

    fireEvent.changeText(input, longText);
    fireEvent.press(reverseButton);

    const errorMessage = screen.getByTestId("error-message");
    expect(errorMessage).toHaveTextContent(
      "Metin en fazla 50 karakter olabilir."
    );

    expect(screen.queryByTestId("reversed-text-output")).toBeNull();
  });

  it("Boş metin girilip ters çevirmeye çalışıldığında sonucu boş tutar", () => {
    setup();
    const input = screen.getByTestId("text-input");
    const reverseButton = screen.getByTestId("reverse-button");

    fireEvent.changeText(input, "   ");
    fireEvent.press(reverseButton);

    expect(screen.queryByTestId("reversed-text-output")).toBeNull();
  });
});
