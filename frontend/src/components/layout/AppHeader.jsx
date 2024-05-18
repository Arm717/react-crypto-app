import { Button, Layout, Modal, Select, Space, Drawer} from "antd";
import { useCrypto } from "../../context/crypto-context";
import { useEffect, useState } from "react";
import CoinInfoModal from "./CoinInfo";
import AddAssetForm from "./AddAssetForm";

const headerStyle = {
  width: "100%",
  textAlign: "center",
  height: 64,
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};




export default function AppHeader() {
   const [select, setSelect] = useState(false)
   const [modal, setModal] = useState(false)
   const [coin, setCoin] = useState(null)
   const [drawer, setDrawer] = useState(false)
   const { crypto } = useCrypto()

useEffect(() => {
    function keypress(event) {
        if(event.key === '/'){
            setSelect(true)
        }
    }
    document.addEventListener('keypress', keypress)
    return () => document.removeEventListener('keypress', keypress)
}, [])

function handleSelect(value) {
    console.log(value)
    setModal(true)
    setCoin(crypto.find((c) => c.id === value))
}
  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{
          width: "250px",
        }}
        open={select}
        onSelect={handleSelect}
        onClick={() => setSelect((prev) => !prev)}
        value = 'press / to open'
        options={crypto.map(coin => ({
            label: coin.name,
            value: coin.id,
            icon: coin.icon
        }))}
        optionRender={(option) => (
          <Space>
            <img style={{width: 20}} src={option.data.icon} alt={option.data.label} /> {option.data.label}
          </Space>
        )}
      />
      <Button onClick={() => setDrawer(true)} type="primary">Add Asset Text</Button>

      <Modal  open={modal} onOk={() => setModal(false)} onCancel={() => setModal(false)} footer={null}>
        <CoinInfoModal coin={coin} />
        </Modal>

        <Drawer width={600} title="Add Asset" onClose={() => setDrawer(false)} open={drawer} destroyOnClose >
        <AddAssetForm onClose={() => setDrawer(false)} />
      </Drawer>
    </Layout.Header>
  );
}
