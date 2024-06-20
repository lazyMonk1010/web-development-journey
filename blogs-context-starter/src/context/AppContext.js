import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";

//creation of context

export const AppContext = createContext();

//provider 
export default function AppContextProvider({children}){
    // yha children pass nahi kie but app context provider k child kon hai index.js m vo darsha rhe hai
    //sara data pass krnge provider m
    // yh consumer ko pass krna usme phkle unme fill krna pdega

    const[loading , setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const[page, setPage] = useState(1);
    const[totalPages , setTotalPages] = useState(null);

    //data filling  
    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)

        }
        catch(error){
            console.log("enter in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);

        }
        setLoading(false);
    } 

    function handlepageChange(page){
        // mko is page ka data chei
        //jo yh page ka data aya usko set kr do
        setPage(page);
        // than again call mar di next page k lie
        fetchBlogPosts(page); 

    }



    //object hai jisme sara required data hai 
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlepageChange,
        fetchBlogPosts
        
        
        
    };

    // step 2 
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
     
}

