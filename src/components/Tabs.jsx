import CodeTab from "./CodeTab.jsx";
import {useSelector} from "react-redux";
import ButtonTab from "./ButtonTab.jsx";
import {useState} from "react";
import Preview from "./Preview.jsx";

export default function Tabs() {
    const tabsState = useSelector(state => state.tabs);
    const previewState = useSelector(state => state.preview);
    const [tabIndex, setTabIndex] = useState(tabsState[0].id);

    return (
        <div className="flex grow">
            <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
                {tabsState.map(tab => {
                        return (
                            <ButtonTab key={tab.id} id={tab.id} toggleTab={id => setTabIndex(id)}
                                       imageUrl={tab.imageUrl} buttonContent={tab.buttonContent}/>
                        )
                    }
                )}
            </div>
            <div className="w-full grow relative">
                <CodeTab id={tabIndex} code={tabsState.find(obj => obj.id === tabIndex).code}/>
                {previewState.preview &&
                    <Preview/>
                }
            </div>
        </div>
    )
}