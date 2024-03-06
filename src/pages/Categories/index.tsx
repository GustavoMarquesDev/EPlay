import ProductList from '../../components/ProductsList'

import * as S from '../../services/api'

const Categories = () => {
  const { data: actionGames } = S.useGetActionGamesQuery()
  const { data: fightGames } = S.useGetFightGamesQuery()
  const { data: rpgGames } = S.useGetRpgGamesQuery()
  const { data: simulationGames } = S.useGetSimulationGamesQuery()
  const { data: sportGames } = S.useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductList
          games={actionGames}
          background="black"
          title="Ação"
          id="action"
        />
        <ProductList
          games={sportGames}
          background="gray"
          title="Esportes"
          id="sports"
        />
        <ProductList
          games={fightGames}
          background="black"
          title="Luta"
          id="fight"
        />
        <ProductList games={rpgGames} background="gray" title="RPG" id="rpg" />
        <ProductList
          games={simulationGames}
          background="black"
          title="Simulação"
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
