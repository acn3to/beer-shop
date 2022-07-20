import menu from '../items.json'
import styles from './Item.module.scss'
import classNames from 'classnames'

type Props = typeof menu[0]

export default function Item(props: Props) {
  const { title, description, category, volume, ibu, price, photo } = props
  return (
    <div className={styles.item}>
      <div className={styles.items__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__type]: true,
              [styles[`item__type__${category.tag}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__volume}>{volume}</div>
          <div className={styles.item__ibu}>{ibu}</div>
          <div className={styles.item__value}>R${price}</div>
        </div>
      </div>
    </div>
  )
}
