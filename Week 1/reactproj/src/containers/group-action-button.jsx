import CustomButton from "../components/custom-button"

export const GroupActionButton=()=>{
    return(
        <>
            <CustomButton value="test1" onClick={()=>alert("test1")}/>
            <CustomButton value="test2" onClick={()=>alert("test2")}/>
            <CustomButton value="test3" onClick={()=>alert("test3")}/>
        </>
    )
}