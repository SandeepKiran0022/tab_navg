import React from 'react';
import {Text,View,Button,Image} from 'react-native';
export default class b extends React.Component
{
	static navigationOptions={
		tabBarlabel:'b'
	}
	render()
	{
		return (
			<View style={{
			flex:1,
			alignitems:'center'}}>
			<Text>
			This is tab2
			</Text>
			</View>
		);
	}	
}