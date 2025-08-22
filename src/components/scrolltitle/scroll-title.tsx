import { View } from "react-native";
import { scrollTitleStyles as styles } from "../../styles/scroll-title-styles";
import { ReactNode } from "react";

interface ScrollTitleProps {
    children: ReactNode;
}

export default function ScrollTitleRoot({ children }: ScrollTitleProps) {
    return <View style={styles.container}>{children}</View>;
}
