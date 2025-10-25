export interface Theme {
    name: string,
    colors: {
        backgroundPrimery: string,
        backgroundSecondery: string
    }
}

export interface Themes {
    [key: string]: Theme
}