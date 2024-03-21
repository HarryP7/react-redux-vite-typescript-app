import { Card, Image } from 'antd'
import { IBeer } from 'features/ListBeers/interfaces'
import styles from './styles.module.scss'

interface Props {
  item: IBeer
}

export const BeerItem: React.FC<Props> = ({ item }) => {
  return (
    <li className={styles.item}>
      <Card
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
        <Card.Meta
          title={item.name}
          description={item.description}
          className={styles.text}
        />
      </Card>
    </li>
  )
}
