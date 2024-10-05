import { PiBatteryPlusVerticalDuotone } from "react-icons/pi";
import { apiSlice} from "../apiSlice" 

const TASKS_URL = "/task";
const Token = localStorage.getItem("token")

export const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDasboardStatus: builder.query({
            query: () => ({
                url : `${TASKS_URL}/dashboard`,
                method: "GET",
                credentials: "include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            }),
        }),

        getAllTask: builder.query({
            query: ({strQuery, isTrashed, search}) => ({
                url : `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
                method: "GET",
                credentials: "include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            }),
        }),

        createtask : builder.mutation({
            query : (data) =>({
                url:`${TASKS_URL}/create`,
                method : "POST",
                body:data,
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        }),
        duplicatetask : builder.mutation({
            query : (id) =>({
                url:`${TASKS_URL}/duplicate/${id}`,
                method : "POST",
                body:{},
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        }),
        updatetask : builder.mutation({
            query : (data) =>({
                url:`${TASKS_URL}/update/${data._id}`,
                method : "PUT",
                body:data,
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        }),

        transtask : builder.mutation({
            query : ({id}) =>({
                url:`${TASKS_URL}/${id}`,
                method : "DELETE",
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        }),

        getsingletask : builder.query({
            query: (id) =>({
                url:`${TASKS_URL}/${id}`,
                method : 'GET',
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        }),

        postTaskactivity : builder.mutation({
            query: ({data , id}) =>({
                // url:`${TASKS_URL}/${id}`,
                method : 'POST',
                body:data,
                credentials:"include",
                 headers: {
      "Content-Type": "application/json", // example header
      "token": Token // if you need authorization
    },
            })
        })


    }),
});

export const { useGetDasboardStatusQuery, useGetAllTaskQuery , useCreatetaskMutation , useDuplicatetaskMutation , useUpdatetaskMutation , useTranstaskMutation, useGetsingletaskQuery, usePostTaskactivityMutation } = taskApiSlice
