import {Col} from 'antd';
import {Link} from "react-router-dom";
import simpleCard from '../components/simpleCard';
function PackDogArrayToCards (dogArr) {

    const cards = []

    for (let i = 0; i < dogArr.length; i++) {
        cards.push(
            <Col key={i.toString()} span={6}>
            <Link to={"/dogs/"+dogArr[i]["id"]}>
                {simpleCard(dogArr[i])}
            </Link>
            </Col>
        );
    }

    return cards;
}

export default PackDogArrayToCards