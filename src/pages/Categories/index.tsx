import ProductList from '../../components/ProductsList'

import { Game } from '../Home'

const promocoes: Game[] = []

const emBreve: Game[] = []

const Categories = () => (
  <>
    <ProductList games={promocoes} background="gray" title="RPG" />
    <ProductList games={emBreve} background="black" title="Ação" />
    <ProductList games={promocoes} background="gray" title="Aventura" />
    <ProductList games={emBreve} background="black" title="FPS" />
  </>
)

export default Categories
