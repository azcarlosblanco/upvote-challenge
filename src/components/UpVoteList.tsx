import { useContext } from "react";
import { UpVoteListProps } from "../types";
import { FaArrowUp } from "react-icons/fa";
import { UpVotesContext } from "../contexts/UpVotesContext";

export default function UpVoteList({ count, selected, index }: UpVoteListProps) {
    const context = useContext(UpVotesContext)

    if (!context) {
        throw new Error("Error");
    }

    const { onSelect } = context
    
    return (
        <ul className={`upvote-list ${selected ? 'selected' : ''}`} onClick={() => onSelect(index)}>
            {[...Array(count)].map((_, index) => (
                <li key={`item-${index}`}>
                    <FaArrowUp />
                </li>
            ))}
        </ul>
    )
}