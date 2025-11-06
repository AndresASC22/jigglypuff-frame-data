import React from "react";
import moveData from "../data/jigglypuffFrameData.json";
import CategorySection from "./CategorySection";

export default function SpecialAttacks({ onMoveClick }) {
    return (
        <CategorySection
            title="Special Attacks"
            moves={moveData.SpecialAttacks}
            onMoveClick={onMoveClick}
        />
    );
}