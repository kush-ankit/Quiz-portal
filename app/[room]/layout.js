export default function RoomLayout({ children, params }) {
    return (
        <section className="p-8 w-full h-full">
            <div className="p-4 bg-slate-200 flex justify-end w-full">
                <span>{params.room}</span>
            </div>
            {children}
        </section>
    )
}