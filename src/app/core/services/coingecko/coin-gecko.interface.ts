interface Sparkline {
    price: number[]
}

export interface Markets {
    id: string
    symbol: string
    name: string
    image: string
    sparkline_in_7d: Sparkline[]
}