import {useDispatch} from "react-redux";
import {updateCode} from "../features/tabs.js";

export default function CodeTab({code, id}) {
    const dispatch = useDispatch()
    return (
        <textarea spellCheck="false" value={code} onChange={e => dispatch(updateCode({id, value: e.target.value}))}
                  className="bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none">
        </textarea>
    )
}