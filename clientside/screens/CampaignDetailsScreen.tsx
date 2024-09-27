import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import UPIComponent from '../components/UPIComponent';

const CampaignDetailsScreen = ({ route, navigation }) => {
  const { campaignId } = route.params;
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/campaigns/${campaignId}`).then((response) => {
      setCampaign(response.data);
    });
  }, [campaignId]);

  if (!campaign) {
    return (
      <View>
        <Text>Loading campaign details...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Title: {campaign.title}</Text>
      <Text>Target Amount: ₹{campaign.amount}</Text>
      <Text>Campaign Description: {campaign.description || 'No description available'}</Text>

      {/* UPI Component to donate to the campaign */}
      <UPIComponent upiId="receiver@upi" amount={campaign.amount} name={campaign.title} />
      
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CampaignDetailsScreen;