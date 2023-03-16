import { StyleSheet, Text, TextInput, TextStyle, View, TextInputProps, ViewProps } from "react-native";
import React from "react";
import { borderRadius, colors } from "../../assets/themes";
interface InputProps extends   ViewProps {
    labelShow?: boolean,
    label?: string,

    error?: string | null,
    leftIcon?: any,
}

export const Input = ({  labelShow = false, error = null, label = "Input label", ...props }: InputProps) => {
    return (
        <>
            {labelShow ?
                <View style={colors.black}><Text>{label}</Text></View>
                : null
            }
            <TextInput
                style={{
                    borderBottomColor: !error ? 'red' : 'black',
                    borderRadius: borderRadius.small
                }}
                
                {...props}
            />
            <Text style={{
                color: 'red'
            }}>{error}</Text>
        </>
    );
};

