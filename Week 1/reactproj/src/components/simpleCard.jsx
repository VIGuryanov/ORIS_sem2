import { Card } from 'antd';
const { Meta } = Card;
const simpleCard = (dog) => (
  <Card
    hoverable
    style={{
      width: 240,
      height: "100%"
    }}
    cover={<img alt="example" src={dog["url"]} />}
  >
    <Meta title={dog["breeds"][0]["name"]}/>
  </Card>
);
export default simpleCard;