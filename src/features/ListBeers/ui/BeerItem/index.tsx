import { Card, Image } from 'antd'
import Meta from 'antd/es/card/Meta'
import { IBeer } from 'core'
import styles from './styles.module.scss'

interface Props {
  item: IBeer
}

export const BeerItem: React.FC<Props> = ({ item }) => {
  return (
    <Card
      key={item.id}
      id={`${item.id}-${item.name}`}
      hoverable
      className={styles.cardItem}
      cover={
        <Image
          className={styles.imageBeer}
          alt={item.tagline}
          src={item.image_url}
        />
      }
    >
      <Meta
        title={item.name}
        description={item.description}
        className={styles.text}
      />
    </Card>
  )
}