import { Theme, Themes } from '../models/theme'

const light: Theme = {
    name: 'light',
    colors: {
        backgroundPrimery: '#4682b4',
        backgroundSecondery: 'rgb(237, 240, 241)'
    }
}

const dark: Theme = {
    name: 'dark',
    colors: {
        backgroundPrimery: 'black',
        backgroundSecondery: 'gray'
    }
}

export const themes: Themes = { light, dark }