import { NavigationContainer,  } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home/home";
import dashboard from "./screens/dashboard/dashboard";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="dashboard" component={dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;