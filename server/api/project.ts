export default defineEventHandler(async (event)=>{
    const response = await $fetch("http://localhost:4000/projects/public", {
        // headers:{
        //     Authorization:`Bearer ${process.env.}`  
        // }
    })
    return response
})