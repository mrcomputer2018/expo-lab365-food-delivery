import { View, TextInput } from "react-native"
import { searchInputStyles as styles } from "../styles/search-input-styles";
import { MaterialCommunityIcons as Material} from "@expo/vector-icons";

export default function SearchInput() {
    return (
        <View style={styles.searchInputArea}>
            <Material name="magnify" size={24} color="#aaa" />
            <TextInput 
            placeholder="Pesquisar pratos, restaurantes ..." 
            style={ styles.input }
            />

        </View>
    );
}
