import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  NativeModules,
  Platform,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcodeData, setBarcodeData] = useState("");
  const [isAuto, setAuto] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);


  const handleBarCodeScanned = ({ type, data }) => {
    if (isAuto) {
      setBarcodeData(data);
    } else {
      setBarcodeData(data);
      setScanned(true);
    }
  };

  const handleScanAgain = () => {
    setScanned(false);
    setBarcodeData("");
  };

  if (hasPermission === null) {
    return <Text>카메라 권한 요청 중...</Text>;
  }
  if (hasPermission === false) {
    return <Text>카메라 권한이 없습니다.</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={
          isAuto
            ? handleBarCodeScanned
            : scanned
            ? undefined
            : handleBarCodeScanned
        }
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.controller}>
        <>
          <Text style={styles.barcodeText}>{barcodeData}</Text>
          {!isAuto && (
            <Button title={"다시 스캔하기"} onPress={handleScanAgain} />
          )}
        </>
        <View style={styles.buttonContaier}>
          <Button
            title="수동"
            onPress={() => {
              setAuto(false);
            }}
          ></Button>
          <Button
            title="자동"
            onPress={() => {
              setAuto(true);
            }}
          ></Button>
        </View>
        {/* {scanned && (
        <>
          <Text style={styles.barcodeText}>{barcodeData}</Text>
          <Button title={"다시 스캔하기"} onPress={handleScanAgain} />
        </>
      )} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  barcodeText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    padding: 10,
    backgroundColor: "rgba(173, 150, 150, 0.6)",
  },
  buttonContaier: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  controller: {
    position: "absolute",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    bottom: 30,
    width: "100%",
  },
});
