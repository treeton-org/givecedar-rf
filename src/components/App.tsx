import css from './App.module.sass'
import {FaInstagram, FaTelegram, FaVk} from 'react-icons/fa'
import {Cover} from './Cover'
import {OrderButton} from './OrderButton'

export const App = (): JSX.Element => (
  <div className={css.App}>
      <div className={css.content}>
          <Cover />
          <OrderButton />
          <p className={css.left}>
              Друзья, челлендж - это про нас
          </p>
          <p className={css.right}>
              Прорастил, посадил, рассказал
          </p>
          <p className={css.left}>
              🌲 Берем саженец<br />
              🗺 Находим подходящее место<br />
              👷 Высаживаем<br />
              📸 Снимаем фото или видео<br />
              ❣️ Добавляем координаты<br />
              🗣 Выкладываем в любимой соцсети с хэштегом <a className={css.link} target="_blank" href="https://vk.com/feed?section=search&q=%23даримкедры" rel="noreferrer">#даримкедры</a> и короткими пояснениями
          </p>
          <p className={css.right}>
              Будет здорово, если вы возьмете на посадку детей, а они нарисуют то, что им пришло в голову
          </p>
          <p className={css.left}>
              Саженцы кедровой сосны можно бесплатно получить у нас. Ближайшая раздача <strong>27 апреля в Москве</strong><br /><br />
              <strong>20 мая</strong> приглашаем вас в <a className={css.link} href="https://vk.com/public204960149">Тритонию</a> на посевную и высадку рощи
          </p>
          <p className={css.right}>
              У челленджа обязательно будет продолжение. С рисунками, музыкой, высадкой рощи и виртуальной галереей. Как всё это организовать, давайте придумаем вместе
          </p>
          <OrderButton />
          <p className={css.left}>
              <strong>Мы в сети</strong><br />
              <a className={css.link} target="_blank" href="https://t.me/treetonium_info" rel="noreferrer"><FaTelegram /> treetonium_info</a><br />
              <a className={css.link} target="_blank" href="https://t.me/+aTpIbg3esacyMTY6" rel="noreferrer"><FaTelegram /> Заказ кедров</a><br />
              <a className={css.link} target="_blank" href="https://instagram.com/treetonium?igshid=YmMyMTA2M2Y=" rel="noreferrer"><FaInstagram /> treetonium</a><br />
              <a className={css.link} target="_blank" href="https://vk.com/public204960149" rel="noreferrer"><FaVk /> Тритония</a><br />
              <br />
              <strong>Присоединяйтесь</strong><br />
              <a className={css.link} target="_blank" href="https://vk.com/feed?section=search&q=%23даримкедры" rel="noreferrer">#даримкедры</a>
          </p>
      </div>
  </div>
)
