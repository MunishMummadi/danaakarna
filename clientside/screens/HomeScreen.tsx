import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/campaigns').then((response) => {
      setCampaigns(response.data);
    });
  }, []);

  const handleCampaignSelect = (campaignId) => {
    navigation.navigate('CampaignDetails', { campaignId });
  };

  return (
    <View>
      <FlatList
        data={campaigns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCampaignSelect(item.id)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;