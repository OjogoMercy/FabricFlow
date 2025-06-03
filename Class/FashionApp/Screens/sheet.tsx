import React, { useRef, useMemo } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export default function Sheet() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['25%', '50%'];
  console.log("Button pressed!");

  const openSheet = () => {
    bottomSheetRef.current?.expand(); // or .snapToIndex(1)
  };

  return (
    <View style={styles.container}>
      <Button title="Open Bottom Sheet" onPress={openSheet} />

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <View style={styles.contentContainer}>
          <Text>Hello from the bottom sheet!</Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  contentContainer: { flex: 1, alignItems: 'center' },
});
