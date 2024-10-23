import Navbar from "../components/Navbar";

import ItemCard from "../components/ItemCard";

export default function CpuPage() {
    return (
        <>
            <Navbar />
            <div className="card-group">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </>
    )
}