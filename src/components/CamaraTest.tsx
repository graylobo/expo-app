// 필요한 모듈을 불러옵니다.
import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { RNCamera } from "react-native-camera";

const App = () => {
  const [barcode, setBarcode] = useState(""); // 바코드 정보를 저장할 상태를 생성합니다.

  // 바코드를 인식했을 때 호출될 함수를 정의합니다.
  const onBarCodeRead = (e: any) => {
    setBarcode(e.data);
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        onBarCodeRead={onBarCodeRead}
        androidCameraPermissionOptions={{
          title: "카메라 권한 필요",
          message: "바코드를 스캔하기 위해 카메라 권한이 필요합니다.",
          buttonPositive: "확인",
          buttonNegative: "취소",
        }}
      />
      <Text style={styles.barcodeText}>{barcode}</Text>{" "}
      {/* 스캔한 바코드를 화면에 보여줍니다. */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column", backgroundColor: "black" },
  preview: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  barcodeText: { fontSize: 18, marginBottom: 10, color: "white" },
});

export default App;
