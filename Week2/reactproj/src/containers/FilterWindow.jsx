import { useState } from "react"
import {Row} from 'antd';
import { Link, Route } from "react-router-dom"
import DownloadFilteredDogArrayAsync from "../functions/DownloadFilteredDogArrayAsync";

const FilterWindow = () => {

    const [isIntervalRequired, setIsIntervalRequired] = useState(false)
    const [filterOption, setFilterOption] = useState(0)
    const [fromValue, setFromValue] = useState(0)
    const [toValue, setToValue] = useState(0)
    const [fContent, setFContent] = useState("")

    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <div style={{
                width: "200px"
            }}>
                <span>Choose filter option:</span>
                <select onChange={(e)=>{
                    e.target.value === "Family (default)"?setIsIntervalRequired(false):setIsIntervalRequired(true);
                    switch(e.target.value){
                        case "Family (default)":
                            setFilterOption(0);
                            break
                        case "Weight":
                            setFilterOption(1);
                            break
                        case "Height":
                            setFilterOption(2);
                            break
                        case "Age":
                            setFilterOption(3);
                            break
                    }                
                }}>
                    <option>Family (default)</option>
                    <option>Weight</option>
                    <option>Height</option>
                    <option>Age</option>
                </select>
                <div hidden={!isIntervalRequired}>
                    <input placeholder="from" onChange={(e) => {
                        setFromValue(e.target.value);
                        console.log(fromValue)
                    }} value={fromValue}></input>
                    <input placeholder="to" onChange={(e) => {
                        setToValue(e.target.value);
                    }} value={toValue}></input>
                </div>
            </div>
            <Link to={"/dogfilter"} onClick={SetContent}>Submit</Link>
            <Route path={"/dogfilter"}>
                <Row gutter={[16, 16]}>
                    {fContent}
                </Row>
            </Route>
        </div>
    )

    async function SetContent(){
        setFContent(await DownloadFilteredDogArrayAsync(filterOption, fromValue, toValue))
    }
}

export default FilterWindow