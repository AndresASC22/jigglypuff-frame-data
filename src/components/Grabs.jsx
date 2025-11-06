import React from "react";
import moveData from "../data/jigglypuffFrameData.json";
import CategorySection from "./CategorySection";

export default function Grabs({onMoveClick}) {
    return (
        <CategorySection
            title="Grabs"
            moves={moveData.Grabs}
            onMoveClick={onMoveClick}
        />
    );
}