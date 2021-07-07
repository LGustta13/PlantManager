/**
 * Uma propriedade que tenha um ponto de interrogação é uma propriedade não obrigatória, como exemplo o active?
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
    title:string;
    active?: boolean;
}

export function EnvironmentButton ({title, active = false, ...rest} : EnvironmentButtonProps){
    return (
        <RectButton style = {[styles.container, active && styles.containerActive]} {...rest}>
            <Text style = {[styles.text, active && styles.textActive]}>
                {title}
            </Text>

        </RectButton>
    );
} // Pega a interface criada

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        height: 40,
        width: 76,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 5
    },

    containerActive: {
        backgroundColor: colors.green_light
    },

    text: {
        color: colors.heading,
        fontFamily: fonts.text
    },

    textActive: {
        color: colors.green_dark,
        fontFamily: fonts.heading
    }
})