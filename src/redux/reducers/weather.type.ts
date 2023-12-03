export type TGetData = {
    data: {
        timelines: [
            {
                timestep: string
                endTime: string
                startTime: string
                intervals: [
                    {
                        startTime: string
                        values: {
                            temperature: number
                            weatherCode: number
                            treeIndex: number
                            humidity: number
                        }
                    }
                ]
            }
        ]
    }
}

export type TWeatherByHours = {
    time: string
    temperature: number
    forecast: number
}
export type TWeatherByDays = {
    day: string
    temperature: number
    forecast: number
}
export type TCurrentWeather = {
    humidity: number
    uvIndex: number
    temperature: number
    forecast: number
}
export type TAdditionalInfo = {
    location: string
    language: string
}

export type TConfig = {
    isError: boolean
    errorMessage: string
    isLoading: boolean
}
