import { UpVoteListProps } from "../types";
import { useUpVotes } from "../hooks/useUpVotes";
import UpVoteArrow from "./UpVoteArrow";

export default function UpVoteList({ count, selected, index }: UpVoteListProps) {
    const { onSelect } = useUpVotes();
    
    return (
        <ul 
            role="list"
            className={`upvote-list ${selected ? 'selected' : ''}`} 
            onClick={() => onSelect(index)}
            aria-label="Upvote list"
        >
            {[...Array(count)].map((_, arrowIndex) => (
                <UpVoteArrow 
                    key={`arrow-${arrowIndex}`}
                    index={arrowIndex}
                />
            ))}
        </ul>
    );
}