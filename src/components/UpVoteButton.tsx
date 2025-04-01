import { UpVoteButtonProps } from "../types";
import { FaPlus } from "react-icons/fa";

export default function UpVoteButton({ setVotes, index }: UpVoteButtonProps) {
    const onIncrement = () => setVotes(prev => prev.map((vote, i) => {
        if (i == index) {
            return {...vote, count: vote.count + 1}
        }

        return vote;
    }))

    return (
        <button className="upvote-button" onClick={onIncrement}>
            <FaPlus />
        </button>
    )
}