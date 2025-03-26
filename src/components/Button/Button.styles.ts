import styled from "styled-components";
import { transparentize } from 'polished'

const COLORS = {
    red: '#F84735',
    primary: '#0099FF',
    foreground: '#274060'
}

const THEME = {
    danger: {
        bg: '#F84735',
        color: '#FFFFFF',
        onHover: `
        box-shadow: 0 3px 6px rgba(0,0,00)
        `,
        disabled: {
            color: COLORS.red,
            bg: transparentize(0.25, COLORS.red),
        },
    },
    primary: {
        bg: '#0099FF',
        color: '#FFFFFF',
        onHover: `  
        box-shadow: 0 3px 6px rgba(0,0,00)
        
        `,
        disabled: {
            bg: transparentize(0.25, COLORS.red),
            color: '#fff'
        },
    },
    text: {
        bg: 'transparent',
        color: '#274060',
        onHover: `
        border-color: #274060;
        `,
        disabled: {
            bg: transparentize(0.44, '#508AC9'),
            color: COLORS.foreground
        },
    },
    
}

export const Wrapper = styled.button<{
    variant: 'danger' | 'primary' | 'text'
}>`
    padding: 4px 8px;

    border: 1px solid ${p => THEME[p.variant].bg};

    color: ${p => THEME[p.variant].color};

    background-color: ${p => THEME[p.variant].bg};

    &:hover,
    &:focus {
        ${p => THEME[p.variant].onHover};
    }

    &:disabled {
        background-color: ${p => THEME[p.variant].disabled.bg};
        color: ${p => THEME[p.variant].disabled.color};

        pointer-events: none;
        border-color: transparent;
    }
`