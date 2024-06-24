import {useDispatch, useSelector} from "react-redux";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/outline/index.js";
import {togglePreview} from "../features/preview"

export default function PreviewButton() {
    const previewData = useSelector(state => state.preview);
    const dispatch = useDispatch();
    return (
        <button
            onClick={() => dispatch(togglePreview())}
            className="py-2 px-4 rounded bg-blue-700 flex mx-auto items-center text-slate-50">
            {!previewData.preview &&
                <EyeIcon className="w-6 h-6 mr-3"/>
            }
            {previewData.preview &&
                <EyeSlashIcon className="w-6 h-6 mr-3"/>
            }
            <span>{previewData.preview ? 'Cacher' : 'Voir'} le résultat</span>
        </button>
    )
}