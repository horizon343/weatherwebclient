import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { TAdditionalInfo, TConfig, TCurrentWeather, TGetData } from "./weather.type"
import { RootState } from "../store"

type TInitialState = {
    currentWeather: TCurrentWeather | null
    additionalInfo: TAdditionalInfo
    config: TConfig
}
const initialState: TInitialState = {
    currentWeather: null,
    additionalInfo: {
        language: "RU",
        location: "Екатеринбург"
    },
    config: {
        isError: false,
        errorMessage: "",
        isLoading: false
    }
}

const currentWeatherSlice = createSlice({
    name: "currentWeatherSlice",
    initialState,
    reducers: {
        setLocationAC: (state, action: PayloadAction<string>) => {
            state.additionalInfo.location = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCurrentWeatherTC.pending, (state) => {
                state.config.isError = false
                state.config.isLoading = true
                state.config.errorMessage = ""
            })
            .addCase(getCurrentWeatherTC.fulfilled, (state, action) => {
                state.config.isLoading = false
                state.currentWeather = action.payload
            })
            .addCase(getCurrentWeatherTC.rejected, (state, action) => {
                state.config.isError = true
                state.config.isLoading = false
                state.config.errorMessage = "Ошибка обработки данных"
            })
    }
})
export default currentWeatherSlice.reducer
export const { setLocationAC } = currentWeatherSlice.actions

export const getCurrentWeatherTC = createAsyncThunk<TCurrentWeather, AxiosResponse<TGetData>>(
    "getCurrentWeatherTC",
    async (response) => {
        const result: TCurrentWeather = {
            forecast: response.data.data.timelines[0].intervals[0].values.weatherCode,
            humidity: response.data.data.timelines[0].intervals[0].values.humidity,
            temperature: response.data.data.timelines[0].intervals[0].values.temperature,
            uvIndex: response.data.data.timelines[0].intervals[0].values.treeIndex
        }
        return result
    }
)

export const getCurrentWeatherS = (state: RootState) => state.currentWeather
