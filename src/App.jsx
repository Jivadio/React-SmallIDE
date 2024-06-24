import {AdjustmentsVerticalIcon} from "@heroicons/react/24/solid/index.js";
import Tabs from "./components/Tabs";

function App() {
    return (
        <div className="bg-zinc-900 min-h-screen flex flex-col">
            <div className="p-4 border-b flex items-center">
                <h1 className="w-full text-slate-50 text-2xl">React-<span className="text-xs">Small</span>IDE</h1>
                <div className="w-full">
                    <button>Voir la preview</button>
                </div>
                <div className="w-full flex">
                    <div className="ml-auto mr-2">
                        <AdjustmentsVerticalIcon className="w-5 h-5 text-slate-200"/>
                    </div>
                </div>
            </div>
            <Tabs/>
        </div>
    )
}

export default App
