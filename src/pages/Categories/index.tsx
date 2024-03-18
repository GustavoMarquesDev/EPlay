import ProductList from '../../components/ProductsList'

import * as S from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    S.useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    S.useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = S.useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    S.useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSports } =
    S.useGetSportGamesQuery()

  return (
    <>
      <ProductList
        games={actionGames}
        background="black"
        title="Ação"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={sportGames}
        background="gray"
        title="Esportes"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductList
        games={fightGames}
        background="black"
        title="Luta"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductList
        games={rpgGames}
        background="gray"
        title="RPG"
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductList
        games={simulationGames}
        background="black"
        title="Simulação"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
