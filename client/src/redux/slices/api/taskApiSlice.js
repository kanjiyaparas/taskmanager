import { PiBatteryPlusVerticalDuotone } from "react-icons/pi";
import { apiSlice} from "../apiSlice" 

const TASKS_URL = "/task";

export const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDasboardStatus: builder.query({
            query: () => ({
                url : `${TASKS_URL}/dashboard`,
                method: "GET",
                credentials: "include",
            }),
        }),

        getAllTask: builder.query({
            query: ({strQuery, isTrashed, search}) => ({
                url : `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
                method: "GET",
                credentials: "include",
            }),
        }),

        createtask : builder.mutation({
            query : (data) =>({
                url:`${TASKS_URL}/create`,
                method : "POST",
                body:data,
                credentials:"include"
            })
        }),
        duplicatetask : builder.mutation({
            query : (id) =>({
                url:`${TASKS_URL}/duplicate/${id}`,
                method : "POST",
                body:{},
                credentials:"include"
            })
        }),
        updatetask : builder.mutation({
            query : (data) =>({
                url:`${TASKS_URL}/update/${data._id}`,
                method : "PUT",
                body:data,
                credentials:"include"
            })
        }),

        transtask : builder.mutation({
            query : ({id}) =>({
                url:`${TASKS_URL}/${id}`,
                method : "DELETE",
                credentials:"include"
            })
        }),

        getsingletask : builder.query({
            query: (id) =>({
                url:`${TASKS_URL}/${id}`,
                method : 'GET',
                credentials:"include"
            })
        }),

        postTaskactivity : builder.mutation({
            query: ({data , id}) =>({
                // url:`${TASKS_URL}/${id}`,
                method : 'POST',
                body:data,
                credentials:"include"
            })
        })


    }),
});

export const { useGetDasboardStatusQuery, useGetAllTaskQuery , useCreatetaskMutation , useDuplicatetaskMutation , useUpdatetaskMutation , useTranstaskMutation, useGetsingletaskQuery, usePostTaskactivityMutation } = taskApiSlice