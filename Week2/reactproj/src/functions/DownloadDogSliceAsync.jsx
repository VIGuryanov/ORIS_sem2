import PackDogArrayToCards from './PackDogArrayToCards';
const DownloadDogSliceAsync = async (from, to) =>
{

    let i = await fetch(`https://localhost:7053/dog/${from}/${to}`)
        
    if (i.ok) { // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      let json = await i.json();

      return PackDogArrayToCards(json)    
    }
    return (null)    
}
export default DownloadDogSliceAsync