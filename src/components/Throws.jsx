import React from "react";
import moveData from "../data/jigglypuffFrameData.json";
import CategorySection from "./CategorySection";

export default function Throws({ onMoveClick }) {
    return (
        <CategorySection
            title="Throws"
            moves={moveData.Throws}
            onMoveClick={onMoveClick}
        />
    );
}