// src/@types/xtreme-ui.d.ts

declare module 'xtreme-ui' {
  import React from 'react'

  // Button Component
  export interface ButtonProps {
    label: string
    type?: 'primary' | 'secondary' | 'tertiary' // Added tertiary for more flexibility
    onClick?: () => void
    icon?: string // Icon name or path
    iconType?: string // Type of icon (e.g., 'svg' or 'font')
    size?: string // Size variations
    className?: string
    loading?: boolean // Changed from Boolean to boolean for consistency
  }

  export const Button: React.FC<ButtonProps>

  // Lottie Component
  export interface LottieProps {
    src: string // URL or path to Lottie animation
    speed?: number // Animation speed
    className?: string
  }

  export const Lottie: React.FC<LottieProps>

  // Textfield Component
  export interface TextfieldProps {
    type?: 'text' | 'email' | 'password' // Specified input types
    placeholder?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onEnterKey?: () => void
    className?: string
    icon?: string // Icon for the input field
  }

  export const Textfield: React.FC<TextfieldProps>

  // Avatar Component
  export interface AvatarProps {
    src: string // Image source URL
    size?: 'small' | 'medium' | 'large' | 'mini' // Size variations
    alt?: string // Alt text for accessibility
    className?: string
  }

  export const Avatar: React.FC<AvatarProps>

  // Icon Component
  export interface IconProps {
    code: string // Icon code (e.g., from a font library)
    type?: 'solid' | 'outline' // Icon style
    size?: number | string // Icon size
    color?: string // Color of the icon
    className?: string
    onClick?: () => void // Click event handler
  }

  export const Icon: React.FC<IconProps>

  // Theme Interface
  export interface XTheme {
    primaryColor: string // Primary color for the theme
    secondaryColor: string // Secondary color for the theme
    backgroundColor: string // Background color
    textColor: string // Text color
    themeScheme?: 'light' | 'dark' // Theme scheme (light or dark)
    // Additional theme properties can be added here
  }

  // useXTheme Hook
  export const useXTheme: () => {
    themeScheme: 'light' | 'dark' // Current theme scheme
    theme: XTheme // Full theme object
  }

  // XProvider Component Props
  export interface XProviderProps {
    children?: React.ReactNode // Accept ReactNode as children
  }

  // XProvider Component
  export const XProvider: React.FC<XProviderProps>

  // useXProvider Hook
  export const useXProvider: () => XProviderProps // Return props for the provider
}
