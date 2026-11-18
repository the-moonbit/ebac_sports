import { useSelector } from 'react-redux'
import { useGetProductsQuery } from '../redux/api'
import { RootState } from '../redux/store'
import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProductsQuery()
  const favoritos = useSelector((state: RootState) => state.cart.favorites)

  if (isLoading) return <h2>Carregando...</h2>

  const produtoEstaNosFavoritos = (produtoId: number) => {
    return favoritos.some((f) => f.id === produtoId)
  }

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto.id)}
          key={produto.id}
          produto={produto}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
