import React from 'react';
import { Button } from 'react-native';
import * as Linking from 'expo-linking';

const UPIComponent = ({ upiId, amount, name }) => {
  const handlePayment = () => {
    const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;
    Linking.openURL(upiUrl).catch((err) => console.error('Error opening UPI', err));
  };

  return <Button title="Donate Now" onPress={handlePayment} />;
};

export default UPIComponent;