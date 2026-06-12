import {  useQuery } from "@tanstack/react-query";
import Useaxios from "./Useaxios";

const UseBlogs = () => {
    const axiosPublic  = Useaxios();
    const {data:blogs=[],isPending:loading , refetch } = useQuery({
       queryKey:['blogs'],
       queryFn: async()=>{
        const res =await axiosPublic.get('/blogs');
        return res.data;
       }
    })
    // console.log(blogs);
    return [blogs ,loading, refetch];
   
};

export default UseBlogs;