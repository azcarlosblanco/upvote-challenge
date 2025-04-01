import { UpVoteListProps } from "../types";
import { FaArrowUp } from "react-icons/fa";
import { useUpVotes } from "../hooks/useUpVotes";

export default function UpVoteList({ count, selected, index }: UpVoteListProps) {
    const { onSelect } = useUpVotes();
    
    return (
        <ul className={`upvote-list ${selected ? 'selected' : ''}`} onClick={() => onSelect(index)}>
            {[...Array(count)].map((_, index) => (
                <li key={`item-${index}`}>
                    <FaArrowUp />
                </li>
            ))}
        </ul>
    );
}