import { Feather } from "@expo/vector-icons";
import { loginStyles as styles } from "../styles/login-styles";

// Use the type of the 'name' prop from Feather
type FeatherIconName = React.ComponentProps<typeof Feather>["name"];

interface InputIconProps {
    iconName: FeatherIconName;
    action?: () => void;
}

export default function InputIcon({ iconName, action }: InputIconProps) {
    return (
        <Feather
            name={iconName}
            size={20}
            color="#999"
            style={styles.inputIcon}
            onPress={action}
        />
    );
}
