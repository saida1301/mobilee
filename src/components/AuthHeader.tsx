import { View } from "react-native";
import React from "react";

import NavigateTo from "../components/NavigateTo"

type AuthHeader = {
    title: string,
    navigateTo?: string,
    showUnderline?: boolean, // add a new prop for showUnderline
    textColor?: string,
}

const AuthHeader = ({ title, navigateTo, showUnderline, textColor }: AuthHeader) => {
    return (
        <View>
            <NavigateTo
                showUndeline={showUnderline} 
                textStyle={{
                    textAlign: 'center',
                    color: textColor 
                }}
                title={title}
                navigateTo={navigateTo} />
        </View>
    );
};

export default AuthHeader;
