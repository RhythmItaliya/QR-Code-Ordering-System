// src/@types/xtreme-ui.d.ts
declare module 'xtreme-ui' {
    import React from 'react';

    export interface ButtonProps {
        label: string;
        type?: 'primary' | 'secondary';
        onClick?: () => void;
    }

    export const Button: React.FC<ButtonProps>;

    export interface LottieProps {
        src: string;
        speed?: number;
        className?: string;
    }

    export const Lottie: React.FC<LottieProps>;

    export interface TextfieldProps {
        type?: string;
        placeholder?: string;
        value?: string;
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onEnterKey?: () => void;
        className?: string;
        icon?: string;
    }

    export const Textfield: React.FC<TextfieldProps>;

    export interface AvatarProps {
        src: string;
        size?: 'small' | 'medium' | 'large' | 'mini';
        alt?: string;
        className?: string;
    }

    export const Avatar: React.FC<AvatarProps>;
}
