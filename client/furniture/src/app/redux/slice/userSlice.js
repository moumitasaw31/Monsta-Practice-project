import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie"

export let userSlice = createSlice(
    {
        name: "user",
        initialState: {
            user: Cookies.get('USER') ? JSON.parse(Cookies.get('USER')) : null,
            token: Cookies.get('TOKEN') || ''

        },
        reducers: {
            loginSucess: function (state, action) {
                let { payload } = action                   //  object, array , string anything can come to payload
                state.user = payload.user
                state.token = payload.token
                Cookies.set("USER", JSON.stringify(state.user))
                Cookies.set("TOKEN", state.token)

                // console.log(state.token);


            },
            logout: function (state, action) {
                state.user = null
                state.token = ''
                Cookies.remove("USER")
                Cookies.remove("TOKEN")

            }
        }
    }
)

export default userSlice.reducer
export let { loginSucess, logout } = userSlice.actions