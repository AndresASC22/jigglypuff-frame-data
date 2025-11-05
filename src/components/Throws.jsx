import React from "react";
import moveData from "../data/jigglypuffFrameData.json";
import CategorySection from "./CategorySection";

export default function Throws() {
    return (
        <CategorySection
            title="Throws"
            moves={moveData.Throws}
        />
    );
}