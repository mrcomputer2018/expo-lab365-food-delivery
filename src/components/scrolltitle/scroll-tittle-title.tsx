import { Text } from "react-native";
import { scrollTitleStyles as styles } from "../../styles/scroll-title-styles";

interface ScrollTitleTtitleProps {
    text: string
}

export default function ScrollTitleTtitle({text}: ScrollTitleTtitleProps) {
    return <Text style={styles.title}>{text}</Text>;
}
