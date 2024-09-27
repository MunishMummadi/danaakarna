import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const CreateCampaignScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const createCampaign = () => {
    axios.post('http://localhost:5000/campaigns', { title, amount }).then(() => {
      navigation.navigate('Home');
    });
  };

  return (
    <View>
      <Text>Title:</Text>
      <TextInput value={title} onChangeText={setTitle} />

      <Text>Target Amount:</Text>
      <TextInput value={amount} onChangeText={setAmount} keyboardType="numeric" />

      <Button title="Create Campaign" onPress={createCampaign} />
    </View>
  );
};

export default CreateCampaignScreen;