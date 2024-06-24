import {useSelector} from "react-redux";

export default function Preview() {
    const tabs = useSelector(state => state.tabs);

    function getCode(lang) {
        return tabs.find(tab => tab.lang === lang).code;
    }

    const sourceDocument = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <style>${getCode('css')}</style>
    </head>
    <body>
    ${getCode('html')}
    <script>${getCode('js')}</script>
    </body>
    `
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50">
            <iframe srcDoc={sourceDocument} sandbox="allow-scripts" className="block h-full w-full"></iframe>
        </div>
    )
}