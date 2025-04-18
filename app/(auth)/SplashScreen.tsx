import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, View} from 'react-native';

const SplashScreen = () => {

    const [loading, setLoading] = useState(true);

    // loading time, can load data here
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }
    , []);

    // Redirect to the landing screen after loading
    if (!loading) {
        return <Redirect href="/(auth)/LandingScreen" />;
    }


    // Splash screen content
    return (
        <View className = "flex-1 flex flex-col justify-center items-center bg-white">
            <Image 
                source={require('@/assets/images/logo.png')} 
                className = "w-1/2 object-scale-down"
                resizeMode="contain"
            />
            <Text className="text-orange-600 mt-5 font-bold text-xl w-1/2 text-right">
                Explore San Francisco with us.
            </Text>
        </View>
    );
};

export default SplashScreen;