import css from './OrderButton.module.sass'

const LINK: string = 'https://docs.google.com/forms/d/e/1FAIpQLScjlopn0PzJfHvKKsgpUxkM7a8Norl-QWPkZsAePjSBjtUEHQ/viewform'

export const OrderButton = (): JSX.Element => (
    <a className={css.OrderButton} target="_blank" href={LINK} rel="noreferrer">Заказать саженцы</a>
)