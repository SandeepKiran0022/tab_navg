import React from 'react';
import {Text,View,Button,Image} from 'react-native';
export default class a extends React.Component
{
	static navigationOptions={
		tabBarlabel:'a'
	}
	render()
	{
		return (
			<View style={{
			flex:1,
			alignitems:'center'}}>
			<Text>
			This is tab1
			</Text>
			</View>
		);
	}	
}