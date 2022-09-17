import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function Chapter() {
  let params = useParams();
  return (
    <Layout>
      <div className="container pt-12">Chapter {(params as any).chapterId}</div>
    </Layout>
  );
}
