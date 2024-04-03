import { SxProps } from "@gluestack-style/react/lib/typescript/types";
import { StyleProp, ViewStyle } from "react-native";

export const darkMode = 'dark';
export const lightMode = 'light';

export type StyleSxProps = { [key: string]: Partial<SxProps<StyleProp<ViewStyle>>> };
