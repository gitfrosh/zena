import Layout from "../components/Layout";
import Home from "./Home";
import WalletModal from "../components/Wallet/Modal";
export default function Dashboard() {
  return (
    <Layout>
      <WalletModal />
      <Home />
    </Layout>
  );
}
