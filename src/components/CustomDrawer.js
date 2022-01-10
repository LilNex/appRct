import React from 'react';
import {Text} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {Ionicons} from 'react-native-ionicons'

import { getStatusBarHeight } from 'react-native-status-bar-height'


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                {/* <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content> */}
                
            </Card>
            {/* <Text>TEst</Text> */}
            <DrawerItemList {...props}/>       
        </DrawerContentScrollView>

    )
}

export default CustomDrawer;