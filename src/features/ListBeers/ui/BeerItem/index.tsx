import { Button, Card, Image } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { getPathWithId, RouterPaths } from 'app/router'
import { IBeer } from 'features/ListBeers/interfaces'
import styles from './styles.module.scss'

interface Props {
  item: IBeer
  setBeerToCart?: (data: IBeer) => void
}

export const BeerItem: React.FC<Props> = ({ item, setBeerToCart }) => {
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
          title={
            <Link to={getPathWithId(RouterPaths.productId, item.id)}>
              {item.name}
            </Link>
          }
          description={item.description}
          className={styles.text}
        />
        {/* TODO проверять, добавлено ли уже в корзину */}
        {setBeerToCart && (
          <div className={styles.buttonContainer}>
            <Button
              type='primary'
              icon={<ShoppingCartOutlined />}
              onClick={() => setBeerToCart(item)}
            >
              В корзину
            </Button>
          </div>
        )}
      </Card>
    </li>
  )
}
