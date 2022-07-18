import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../Containers/ItemListContainer/ItemListContainer'
import serviceJson from '../services/serviceJson';
import useEffectOnce from '../../hooks/useOnceEffect';

const Home = () => {
  const mensaje = "Bienvenido...";
  const [dataJson, setDataJson]: any = React.useState<any[]>([]);
  const [categoryProd, setCategoryProd]: any =React.useState<any[]>([]);
  const param = useParams();
  
  useEffectOnce(() => {
    serviceJson().then((resp: any) => {
      setDataJson(resp);
    });
  })

  React.useEffect(() => {
    if(param.id !== "Home" || param === {} ){
      setCategoryProd(dataJson.filter((item: { category: string | undefined; }) => item.category === param.id))
    }
  }, [param.id, categoryProd, param, dataJson]);
  return (
    <ItemListContainer mensaje={mensaje} objProducts={(param.id === "Home" || param.id === undefined) ? dataJson : categoryProd} category={param.id === undefined ? "Home" : param.id} />
  )
}

export default Home