export default function CodeTab({code, id}) {
    return (
        <textarea spellCheck="false" value={code}
                  className="bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none">
        </textarea>
    )
}