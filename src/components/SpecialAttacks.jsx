import React from "react";
import moveData from "../data/jigglypuffFrameData.json";
import CategorySection from "./CategorySection";

export default function SpecialAttacks() {
    return (
        <CategorySection
            title="Special Attacks"
            moves={moveData.SpecialAttacks}
        />
    );
}