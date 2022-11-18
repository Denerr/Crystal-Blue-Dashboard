import dashStyles from "./style";
import React from "react";
import { View, Text } from "react-native";

export default function Dashboard() {
    return(
        <View style={dashStyles.container}>
            <Text>Ola, bem vindo ao dashboard</Text>
        </View>
    )
}