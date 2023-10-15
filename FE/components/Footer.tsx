import { View, Text, TouchableOpacity, Image } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import HomeIcon from '../icons/home.svg'
import SignOutIcon from '../icons/signout.svg'

const Footer: React.FC<BottomTabBarProps> = (props) => {
    const { state, navigation } = props;
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            maxWidth: "100%",
            paddingLeft: 30,
            paddingRight: 30,
            height: 90,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            shadowColor: 'black',
            shadowOffset: {
                width: 30,
                height: 60,
            },
            shadowOpacity: 0.85,
            shadowRadius: 90,
        }}>
            {/* Render the default tab bar */}
            <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1, width: "100%" }}>
                {props.state.routes.map((route, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => props.navigation.navigate(route.name)}
                        style={{
                            margin: "auto", 
                            flexGrow: 1, 
                            display: "flex", 
                            alignItems: 'center', 
                            alignContent: "center", 
                            justifyContent: 'center',
                        }}
                    >
                        {route.name === "Home" ?
                            <Image style={state.index == index ? {tintColor: '#AB30E4'}: {}}source={require(`../icons/SearchIcon.png`)} />:
                            route.name === "Inbox" ?
                                <Image style={state.index == index ? {tintColor: '#AB30E4'}: {}}source={require(`../icons/ChatIcon.png`)} /> :
                                route.name === "Profile" ?
                                    <Image style={state.index == index ? {tintColor: '#AB30E4'}: {}}source={require(`../icons/UserIcon.png`)} /> : <SignOutIcon />}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

export default Footer;