import { Card } from 'antd';
const { Meta } = Card;
const simpleCard = (dog) => (
  <Card
    hoverable
    style={{
      width: 240,
      height: "100%"
    }}
    cover={<img alt="example" src={dog["imgUrl"]} />}
  >
    <Meta title={dog["familyName"]}/>
  </Card>
);
export default simpleCard;