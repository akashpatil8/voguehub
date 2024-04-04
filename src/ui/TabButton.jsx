export default function TabButton({ selected, children, onClick, tabName }) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-md py-4 transition-colors duration-300 hover:bg-slate-300 focus:outline-none focus:ring-[1px] focus:ring-gray-400 ${selected === tabName && "bg-slate-600 font-semibold text-slate-100 hover:bg-slate-600"}`}
    >
      {children}
    </button>
  );
}
