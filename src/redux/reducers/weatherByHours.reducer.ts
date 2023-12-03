import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios, { AxiosResponse } from "axios"
import { TConfig, TGetData, TWeatherByHours } from "./weather.type"

const URL = process.env.REACT_APP_API_URL || ""

type TInitialState = {
    weatherByHours: Array<TWeatherByHours> | null
    config: TConfig
}
const initialState: TInitialState = {
    weatherByHours: null,
    config: {
        errorMessage: "",
        isError: false,
        isLoading: false
    }
}

const weatherByHoursSlice = createSlice({
    name: "weatherByHoursSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeatherByHoursTC.pending, (state) => {
                state.config.isError = false
                state.config.isLoading = true
                state.config.errorMessage = ""
            })
            .addCase(getWeatherByHoursTC.fulfilled, (state, action) => {
                state.config.isLoading = false
                state.weatherByHours = action.payload
            })
            .addCase(getWeatherByHoursTC.rejected, (state, action) => {
                state.config.isError = true
                state.config.isLoading = false
                state.config.errorMessage = action.payload as string
            })
    }
})
export default weatherByHoursSlice.reducer

export const getWeatherByHoursTC = createAsyncThunk<Array<TWeatherByHours>, string, { rejectValue: string }>(
    "getWeatherByHoursTC",
    async (location, thunkApi) => {
        try {
            const response: AxiosResponse<TGetData> = await axios.get<TGetData>(
                `${URL}&timesteps=1h&location=${location}`
            )

            const indexArray: Array<number> = [0, 4, 8, 12, 16, 20]
            const result: Array<TWeatherByHours> = []
            response.data.data.timelines[0].intervals.map((item, index) => {
                if (indexArray.indexOf(index) !== -1) {
                    const hours: number = new Date(item.startTime).getUTCHours()
                    const time: string = hours.toString().length === 1 ? "0" + hours : hours.toString()

                    result.push({
                        forecast: item.values.weatherCode,
                        temperature: item.values.temperature,
                        time: time + ":00"
                    })
                }
            })

            return result
        } catch (error) {
            return thunkApi.rejectWithValue("Ошибка запроса")
        }
    }
)
