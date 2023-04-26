import css from './Cover.module.sass'
import cover from '../assets/cover.jpg'

export const Cover = (): JSX.Element => (
  <div className={css.Cover}>
      <img src={cover} alt='cover' />
      <div>
          <span>За картину спасибо <a className={css.link} target="_blank" href="https://www.instagram.com/varda.ma" rel="noreferrer">@varda.ma</a></span>
      </div>
  </div>
)
