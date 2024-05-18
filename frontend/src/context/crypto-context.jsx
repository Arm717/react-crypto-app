import {createContext, useContext, useEffect, useState} from 'react'
import { percentDefference } from '../utils';
import { fakeFetchCrypto, fetchAssets } from "../api";

const CriptoContext = createContext({
    asserts: [],
    crypto: [],
    loading: false
})

export function CriptoContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [crypto, setCrypto] = useState([]);
    const [assets, setAssets] = useState([]);

    function mapAssets(assets, result) {
      return assets.map((asset) => {
        const coin = result.find((c) => c.id === asset.id);
  
            return {
              grow: asset.price < coin.price,
              growPercent: percentDefference(asset.price, coin.price),
              totalAmount: asset.amount * coin.price,
              totalProfit: asset.amount * coin.price - asset.amount * asset.price,
              name: coin.name,
              ...asset,
            };
      })
    }
  
    useEffect(() => {
      async function preload() {
        setLoading(true);
        const { result } = await fakeFetchCrypto();
        const assets = await fetchAssets();
  
        setAssets(mapAssets(assets, result));
        setCrypto(result);
        setLoading(false);
      }
      preload();
    }, [])

    function addAsset(newAsset) {
      setAssets((prev) => mapAssets([...prev, newAsset], crypto))
    }

    return <CriptoContext.Provider  value={{loading, crypto, assets, addAsset}}>
        {children}
    </CriptoContext.Provider>
}

export default CriptoContext;

export function useCrypto() {
    return useContext(CriptoContext);
}