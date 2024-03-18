import { parseToBrl } from '../../utils'
import { useGetFeatureGameQuery } from '../../services/api'

import Tag from '../Tag'
import { ButtonLink } from '../Button/styles'
import * as S from './styles'
import Loader from '../Loader'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaques do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{parseToBrl(game?.prices.old)} </span> <br />
            por apenas {parseToBrl(game?.prices.current)}
          </S.Prices>
        </div>
        <ButtonLink
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </ButtonLink>
      </div>
    </S.Image>
  )
}

export default Banner
