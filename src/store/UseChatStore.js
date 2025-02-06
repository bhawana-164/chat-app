import {create} from "zustand";
import toast from "react-hot-toast";
import {axiosInstance} from "../lib/axios";

export const useChatStore = create ((set)=>({
    messages:[],
    users:[],
    selectLoading:null,
    isUseLoading:false,
    isMessageLoading:false,

getUsers:async()=>{
    set({isUsersLoading:true});
    try{
        const res=await axiosInstance.get("/messages/users");
        set({users:res.data});
    }catch(error){
        toast.erroe(error.response.data.message);
    }finally{
        set({isUsersLoading:false});
    }
},

getMessages:async(userID)=>{
    set({isMessagesLoading:true});
    try{
        const res=await axiosInstance.get(`/messages/${userID}`);
        set({messages:res.data});
    }catch(error){
        toast.erroe(error.response.data.message);
    }finally{
        set({isMessagesLoading:false});
    }
},
setSelectedUser:(selectedUser)=>set({selectUser}),

}));