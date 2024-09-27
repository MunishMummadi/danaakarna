import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CreateCampaignScreen from '../screens/CreateCampaignScreen';
import CampaignDetailsScreen from '../screens/CampaignDetailsScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreateCampaign" component={CreateCampaignScreen} />
      <Stack.Screen name="CampaignDetails" component={CampaignDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;