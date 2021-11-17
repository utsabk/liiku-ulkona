import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import { useDispatch } from 'react-redux';
import { addUserPoints } from '../store/actions/user';

const { width } = Dimensions.get('window');
const qrSize = width * 0.7;

const QRScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    if (data === 'Helsinki091') {
      dispatch(addUserPoints());
      return alert(`Point collected, Congratulation!!`);
    }
    alert(`Please scan the correct bar code!`);
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >
        <Text style={styles.description}>Scan your QR code</Text>
        <BarcodeMask
          width={qrSize}
          height={qrSize}
          edgeColor="#62B1F6"
          showAnimatedLine
        />
      </BarCodeScanner>

      {scanned && (
        <Text onPress={() => setScanned(false)} style={styles.rescan}>
          Scan Again
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  description: {
    fontSize: width * 0.09,
    marginTop: '10%',
    textAlign: 'center',
    width: '70%',
    color: 'white',
  },
  rescan: {
    fontSize: width * 0.05,
    textAlign: 'center',
    width: '100%',
    color: 'white',
    position: 'absolute',
    bottom: '10%',
  },
});

export default QRScanScreen;
