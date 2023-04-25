import css from './App.module.sass'
import cover from '../assets/cover.jpg'
import { FaInstagram, FaTelegram } from 'react-icons/fa'

export const App = (): JSX.Element => (
  <div className={css.App}>
      <div className={css.content}>
          <div className={css.cover}>
              <img src={cover} alt='cover' />
              <div>
                  <span>За картину спасибо <a className={css.link} target="_blank" href="https://www.instagram.com/varda.ma" rel="noreferrer">@varda.ma</a></span>
              </div>
          </div>
          <a className={css.order} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScjlopn0PzJfHvKKsgpUxkM7a8Norl-QWPkZsAePjSBjtUEHQ/viewform" rel="noreferrer">Заказать саженцы</a>
          <p className={css.left}>Друзья, челлендж - это про нас</p>
          <p className={css.right}>Прорастил, посадил, рассказал</p>
          <p className={css.left}>🌲 Берем саженец<br />
              🗺 Находим подходящее место<br />
              👷 Высаживаем<br />
              📸 Снимаем фото или видео<br />
              ❣️ Добавляем координаты<br />
              🗣 Выкладываем в любимой соцсети с хэштегом <a className={css.link} target="_blank" href="https://vk.com/feed?section=search&q=%23даримкедры" rel="noreferrer">#даримкедры</a> и короткими пояснениями
          </p>
          <p className={css.right}>Будет здорово, если вы возьмете на посадку детей, а они нарисуют то, что им пришло в голову</p>
          <p className={css.left}>
              Саженцы кедровой сосны можно бесплатно получить у нас. Ближайшая раздача <strong>27 апреля в Москве</strong><br /><br />
              <strong>20 мая</strong> приглашаем вас в <a className={css.link} href="https://vk.com/public204960149">Тритонию</a> на посевную и высадку рощи
          </p>
          <p className={css.right}>У челленджа обязательно будет продолжение. С рисунками, музыкой, высадкой рощи и виртуальной галереей. Как всё это организовать, давайте придумаем вместе</p>
          <a className={css.order} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScjlopn0PzJfHvKKsgpUxkM7a8Norl-QWPkZsAePjSBjtUEHQ/viewform" rel="noreferrer">Заказать саженцы</a>
          <p className={css.left}>
              <strong>Мы в сети</strong><br />
              <a className={css.link} target="_blank" href="ttps://t.me/treetonium_info" rel="noreferrer"><FaTelegram /> treetonium_info</a><br />
              <a className={css.link} target="_blank" href="https://t.me/+aTpIbg3esacyMTY6" rel="noreferrer"><FaTelegram /> Заказ кедров</a><br />
              <a className={css.link} target="_blank" href="https://instagram.com/treetonium?igshid=YmMyMTA2M2Y=" rel="noreferrer"><FaInstagram /> treetonium</a><br />
              <br />
              <strong>Присоединяйтесь</strong><br />
              <a className={css.link} target="_blank" href="https://vk.com/feed?section=search&q=%23даримкедры" rel="noreferrer">#даримкедры</a>
          </p>
      </div>
  </div>
)
