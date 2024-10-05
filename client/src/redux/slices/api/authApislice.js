import { apiSlice } from "../apiSlice"
import { logout } from "../authSlice"

const AUTH_URL = '/user'

const Token = localStorage.getItem("token")

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login : builder.mutation({
            query: (data)=>({
                url: `${AUTH_URL}/login`,
                method : "POST",
                body: data,
                credentials:"include",
                headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        }),

        register : builder.mutation({
            query: (data)=>({
                url: `${AUTH_URL}/register`,
                method : "POST",
                body: data,
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        }),

        logout : builder.mutation({
            query: (data)=>({
                url: `${AUTH_URL}/logout`,
                method : "POST",
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        })
    })
})


export const {useLoginMutation , useLogoutMutation , useRegisterMutation} = authApiSlice
