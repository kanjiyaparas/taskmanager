import { apiSlice } from "../apiSlice"

const USER_URL = '/user'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateuser : builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/profile`,
                method : "PUT",
                body: data,
                credentials:"include",
            })
        }),

        getTeamList : builder.query({
            query: ()=>({
                url: `${USER_URL}/get-team`,
                method : "GET",
                credentials:"include",
            })
        }),

        deleteuser : builder.mutation({
            query: (id)=>({
                url: `${USER_URL}/${id}`,
                method : "DELETE",
                credentials:"include",
            })
        }),
        userAction : builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/${data?.id}`,
                method : "PUT",
                body:data,
                credentials:"include",
            })
        }),

        getnotification : builder.query({
            query: (data)=>({
                url: `${USER_URL}/notifications`,
                method : "GET",
                credentials:"include",
            })
        }),

        marknotiAsRead : builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/read-noti?isReadType=${data.type}&id=${data?.id}`,
                method : "PUT",
                body:data,
                credentials:"include",
            })
        }),

        changepassword : builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/change-password`,
                method : "PUT",
                body:data,
                credentials:"include",
            })
        }),
    })
})

export const { useUpdateuserMutation , useGetTeamListQuery , useDeleteuserMutation , useUserActionMutation , useGetnotificationQuery , useChangepasswordMutation , useMarknotiAsReadMutation} = userApiSlice;