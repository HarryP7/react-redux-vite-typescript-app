import { Button, Col, Image, Layout, Row, Skeleton, Typography } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { IBeerDetailsState } from 'features/BeerDetails/store'
import { Header } from '../Header'
import styles from './styles.module.scss'

const { Text } = Typography

type Props = Pick<IBeerDetailsState, 'beerDetails' | 'loading'>

export function BeerDetails({ beerDetails, loading }: Props) {
  return (
    <Layout>
      <Header title={beerDetails?.name} />
      <Layout.Content className={styles.content}>
        <Row>
          <picture className={styles.imgContainer}>
            {loading ? (
              <Skeleton.Image active className={styles.imgMax} />
            ) : (
              <Image src={beerDetails?.image_url} />
            )}
          </picture>
          <Col className={styles.params}>
            <Skeleton loading={loading}>
              <Row>
                <Text className={styles.title} type='secondary'>
                  Слоган:
                </Text>
                <Text className={styles.value}>{beerDetails?.tagline}</Text>
              </Row>
              <Row>
                <Text className={styles.title} type='secondary'>
                  Объем:
                </Text>
                <Text className={styles.value}>
                  {beerDetails?.volume.value} {beerDetails?.volume.unit}
                </Text>
              </Row>
              <Row>
                <Text className={styles.title} type='secondary'>
                  Объем кипячения:
                </Text>
                <Text className={styles.value}>
                  {beerDetails?.boil_volume.value}{' '}
                  {beerDetails?.boil_volume.unit}
                </Text>
              </Row>
              <Row>
                <Text className={styles.title} type='secondary'>
                  Впервые сварено:
                </Text>
                <Text className={styles.value}>
                  {beerDetails?.first_brewed}
                </Text>
              </Row>
              <Row>
                <Text className={styles.title} type='secondary'>
                  Советы пивоваров:
                </Text>
                <Text className={styles.value}>
                  {beerDetails?.brewers_tips}
                </Text>
              </Row>
              <Row>
                <Text className={styles.title} type='secondary'>
                  Предоставлено:
                </Text>
                <Text className={styles.value}>
                  {beerDetails?.contributed_by}
                </Text>
              </Row>
              <Row>
                <Text className={styles.title} type='secondary'>
                  Сочетаемость с едой:
                </Text>
                <Text className={styles.value}>
                  {beerDetails?.food_pairing?.join(', ')}
                </Text>
              </Row>
              {/* <Row>
              <Text className={styles.title} type='secondary'>Ингридиенты:</Text>
              <Text className={styles.value}>
                {beerDetails?.ingredients?.map((data) =>
                  <Ingredient data={data} />
                )}
              </Text>
            </Row> */}
            </Skeleton>
          </Col>
          <Col>
          {/* TODO проверять, добавлено ли уже в корзину */}
            <Button type='primary' icon={<ShoppingCartOutlined />}>
              В корзину
            </Button>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  )
}
