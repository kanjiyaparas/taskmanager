import { apiSlice } from "../apiSlice"

const USER_URL = '/user'
const Token = localStorage.getItem("token")

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateuser : builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/profile`,
                method : "PUT",
                body: data,
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        }),

        getTeamList : builder.query({
            query: ()=>({
                url: `${USER_URL}/get-team`,
                method : "GET",
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        }),

        deleteuser : builder.mutation({
            query: (id)=>({
                url: `${USER_URL}/${id}`,
                method : "DELETE",
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        }),
        userAction : builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/${data?.id}`,
                method : "PUT",
                body:data,
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        }),

        getnotification : builder.query({
            query: (data)=>({
                url: `${USER_URL}/notifications`,
                method : "GET",
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        }),

        marknotiAsRead : builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/read-noti?isReadType=${data.type}&id=${data?.id}`,
                method : "PUT",
                body:data,
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        }),

        changepassword : builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/change-password`,
                method : "PUT",
                body:data,
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        }),
    })
})

export const { useUpdateuserMutation , useGetTeamListQuery , useDeleteuserMutation , useUserActionMutation , useGetnotificationQuery , useChangepasswordMutation , useMarknotiAsReadMutation} = userApiSlice;
