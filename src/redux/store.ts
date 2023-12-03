import { configureStore } from "@reduxjs/toolkit"
import weatherByDaysReducer from "./reducers/weatherByDays.reducer"
import weatherByHoursReducer from "./reducers/weatherByHours.reducer"
import currentWeatherReducer from "./reducers/currentWeather.reducer"

export const store = configureStore({
    reducer: {
        weatherByDays: weatherByDaysReducer,
        weatherByHours: weatherByHoursReducer,
        currentWeather: currentWeatherReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
