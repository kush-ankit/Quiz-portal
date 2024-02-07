import RoomCardForm from "@/components/roomCard";

export default function Dashboard() {




    return (
        <div className="flex justify-center items-center h-screen gap-4">
            <div className="">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">Rooms</h1>
                    <button className="bg-red-500 text-white px-2 py-1 rounded-md">Create new Room</button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                    <RoomCardForm />
                </div>
            </div>

        </div>
    )
}