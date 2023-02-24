import {Row} from 'antd';
import { useState } from 'react';
import {
  Route,
  useParams
} from "react-router-dom";
import DownloadDogSlice from '../functions/DownloadDogSlice';
import DownloadDogSliceAsync from '../functions/DownloadDogSliceAsync';
import DownloadDog from '../functions/DownloadDog';
import dogFullInfoCard from '../components/dogFullInfoCard';
import SendCommentForm from './SendCommentForm';
import FilterWindow from './FilterWindow';
import {Pagination} from 'antd';
const gutters = {};
const vgutters = {};
const colCounts = {};
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  gutters[i] = value;
});
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  vgutters[i] = value;
});
[2, 3, 4, 6, 8, 12].forEach((value, i) => {
  colCounts[i] = value;
});
export default function MainDogContent() {
  const [gutterKey] = useState(1);
  const [vgutterKey] = useState(1);

  const dogInitSlice = DownloadDogSlice(0,16);

  const [pageContent, setPageContent] = useState("");
  
  return (
    <>
      <Route exact path="/">
        <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>
          {pageContent.length === 0? dogInitSlice : pageContent}
        </Row>
        <Pagination defaultCurrent={1} total={100} onChange = {updatePage} onShowSizeChange={updatePage} pageSizeOptions={[5,10,16,50,100]} defaultPageSize={16}/>
      </Route>
      <Route path="/dogs/:id" children={<Child />} />
      <Route path="/comment">
        {SendCommentForm()}
      </Route>   
      <Route path="/dogfilter">
        {FilterWindow()}
      </Route>   
    </>
  );

  async function updatePage (page, pageSize) {
    setPageContent(await DownloadDogSliceAsync((page-1)*pageSize, (page)*pageSize))
  }
};

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  //const dog = 

  return (
    <div>
      {dogFullInfoCard(DownloadDog(id))}
    </div>
  );
}


