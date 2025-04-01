import { useContext } from "react";
import { UpVoteButtonProps } from "../types";
import { FaPlus } from "react-icons/fa";
import { UpVotesContext } from "../contexts/UpVotesContext";

export default function UpVoteButton({ index }: UpVoteButtonProps) {
    const context = useContext(UpVotesContext)

    if (!context) {
        throw new Error("Error");
    }

    const { onIncrement } = context

    return (
        <button className="upvote-button" onClick={() => onIncrement(index)}>
            <FaPlus />
        </button>
    )
}