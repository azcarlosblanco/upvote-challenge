import { useMemo } from "react";
import { UpVoteListProps } from "../types";
import { useUpVotes } from "../hooks/useUpVotes";
import UpVoteArrow from "./UpVoteArrow";

export default function UpVoteList({ count, selected, index }: UpVoteListProps) {
    const { onSelect } = useUpVotes();
    
    const arrows = useMemo(() => 
        Array.from({ length: count }, (_, arrowIndex) => (
            <UpVoteArrow 
                key={`arrow-${arrowIndex}`}
                index={arrowIndex}
            />
        )),
        [count]
    );
    
    return (
        <ul 
            role="list"
            className={`upvote-list ${selected ? 'selected' : ''}`} 
            onClick={() => onSelect(index)}
            aria-label="Upvote list"
        >
            {arrows}
        </ul>
    );
}