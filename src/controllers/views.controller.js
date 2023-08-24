export const loginfrontHandle=async(req,res)=>{
    try {
        res.render('jwt')
    } catch (error) {
        console.log(error);
    }
}
