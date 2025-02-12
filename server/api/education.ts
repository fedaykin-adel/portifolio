export default defineEventHandler(async (event)=>{
    const response = await $fetch("http://localhost:4000/education/public", {
        // headers:{
        //     Authorization:`Bearer ${process.env.}`  
        // }
    })
    return response
})