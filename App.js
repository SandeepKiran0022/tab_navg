import React from 'react';
import {Text,View} from 'react-native';
import { TabNavigator } from 'react-navigation';
import a from './tabs/a';
import b from './tabs/b';

var MainScreenNavigator = TabNavigator({
	Tab1:{screen:a},
	Tab2:{screen:b},
		{
			tabBarPosition:'bottom',
			swipeEnabled:true,
			tabBarOptions:
			{
				activeTintColor:'white',
				activeBackgroundcolor:'darkgreen',
				inativeTintColor:'black',
				inactiveBackgroudColor:'green'
			}
			
		}
}
);

MainScreenNavigator.navigatorOptions={
	title:"Tab"
};

export default MainScreenNavigator;