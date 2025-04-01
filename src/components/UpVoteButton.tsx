import { UpVoteButtonProps } from "../types";
import { FaPlus } from "react-icons/fa";
import { useUpVotes } from "../hooks/useUpVotes";

export default function UpVoteButton({ index }: UpVoteButtonProps) {
    const { onIncrement } = useUpVotes();

    return (
        <button className="upvote-button" onClick={() => onIncrement(index)}>
            <FaPlus />
        </button>
    );
}