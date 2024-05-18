import { Flex, Tag, Typography, Divider} from "antd"
import CoinInfoF from "./CoininfoF"

export default function CoinInfoModal({coin}) {
    return (
    <>
    <CoinInfoF coin={coin} withSymbol />
    <Divider />
    <Flex>
        <Typography.Paragraph>
        <Typography.Text strong>1 hour: </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
            {coin.priceChange1h}%
            </Tag>
    </Typography.Paragraph>
    <Typography.Paragraph>
        <Typography.Text strong>1 day: </Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>
            {coin.priceChange1d}%
            </Tag>
    </Typography.Paragraph>
    <Typography.Paragraph>
        <Typography.Text strong>1 week: </Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>
            {coin.priceChange1w}%
            </Tag>
    </Typography.Paragraph>
    </Flex>
    <Typography.Paragraph>
        <Typography.Text strong>Price: </Typography.Text>
            {coin.price.toFixed(2)}$
    </Typography.Paragraph>
    <Typography.Paragraph>
        <Typography.Text strong>Price BTC: </Typography.Text>
            {coin.priceBtc}
    </Typography.Paragraph>
    <Typography.Paragraph>
        <Typography.Text strong>Market Cap: </Typography.Text>
            {coin.marketCap}$
    </Typography.Paragraph>
    <Typography.Paragraph>
        <Typography.Text strong>Contract Address: </Typography.Text>
            {coin.contractAddress}
    </Typography.Paragraph>
    </>
)
}