import { View, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function ImageForm() {
    return (
        <View>
            <Image
                source={require("../../assets/background.jpeg")}
                style={globalStyles.imageTop}
            />
        </View>
    );
}
