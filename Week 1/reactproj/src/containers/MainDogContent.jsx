import { Col, Row} from 'antd';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import simpleCard from '../components/simpleCard';
import DownloadDogArray from '../functions/DownloadDogArray';
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
  const [colCountKey] = useState(2);
  const cols = [];
  const colCount = colCounts[colCountKey];

  const dogArr = DownloadDogArray();

  
  for (let i = 0; i < dogArr.length; i++) {
    cols.push(
      <Col key={i.toString()} span={24 / colCount}>
        <Link to={"/"+dogArr[i]["breeds"][0]["name"]}>
          {simpleCard(dogArr[i])}
        </Link>
      </Col>,
    );
  }

  const contentSwitch =[];
  for (let i = 0; i < dogArr.length; i++) {
    contentSwitch.push(
      <Route path={"/"+dogArr[i]["breeds"][0]["name"]}>
        <img alt="example" src={dogArr[i]["url"]}/>
        <p>Weight: {dogArr[i]["breeds"][0]["weight"]["metric"]} kg</p>
        <p>Height: {dogArr[i]["breeds"][0]["height"]["metric"]} sm</p>
        <p>Life time: {dogArr[i]["breeds"][0]["life_span"]}</p>
      </Route>
    );}
  
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>
              {cols}
            </Row>
          </Route>
          {contentSwitch}          
        </Switch>
      </Router>
  );
};


