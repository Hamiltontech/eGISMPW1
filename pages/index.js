import dynamic from "next/dynamic";
import {Header} from "../components/Header"
import {Search} from "../components/Search"

//////////////////////////// we need this dynamic import, due to our next.js usage
/////////////////////////// https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  return (
    <>
      <Header className="Header"/>
    <div className="Body">
      <div className="Panel">
       <Search />
      </div>
      <div>
      <Map  className="Map-Box" />
      </div>
    </div>
    </>
  );
}
