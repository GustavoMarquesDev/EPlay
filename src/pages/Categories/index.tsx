import { useEffect, useState } from 'react'
import ProductList from '../../components/ProductsList'

import { Game } from '../Home'

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
        <ProductList games={actionGames} background="black" title="Ação" />
        <ProductList games={sportGames} background="gray" title="Esportes" />
        <ProductList games={fightGames} background="black" title="Luta" />
        <ProductList games={rpgGames} background="gray" title="RPG" />
        <ProductList
          games={simulationGames}
          background="black"
          title="Simulação"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
