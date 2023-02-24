const dogFullInfoCard = (dog) => {
    let family = dog["family"];
    return(
    <div>
        <img alt="example" src={dog["imgUrl"]}/>
        <p>Name: {dog["name"]}</p>
        <p>Age: {dog["age"]}</p>
        <p>Weight: {dog["weight"]}</p>
        <p>Height: {dog["height"]}</p>
        <p>Family info:</p>
        <p>{'\u00A0'} {'\u00A0'} Family name: {ExecuteIfFamilyDefined(()=> family["name"])}</p>
        <p>{'\u00A0'} {'\u00A0'} Family lifetime: {ExecuteIfFamilyDefined(()=> `${family["minLifeTime"]} - ${family["maxLifeTime"]} years`)}</p>
        <p>{'\u00A0'} {'\u00A0'} Family height: {ExecuteIfFamilyDefined(()=> `${family["minHeight"]} - ${family["maxHeight"]} sm`)}</p>
        <p>{'\u00A0'} {'\u00A0'} Family weight: {ExecuteIfFamilyDefined(()=> `${family["minWeight"]} - ${family["maxWeight"]} kg`)}</p>
        <p>Short description: {dog["shortDescription"]}</p>
        <p>Description: {dog["description"]}</p>
    </div>)

    function ExecuteIfFamilyDefined (toExecute){
        return (typeof family != 'undefined'? toExecute():"")
    }
};
export default dogFullInfoCard;