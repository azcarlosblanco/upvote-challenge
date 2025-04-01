import { UpVoteListProps } from "../types";
import { FaArrowUp } from "react-icons/fa";

export default function UpVoteList({ count, selected, index, setVotes }: UpVoteListProps) {

    const onSelect = () => setVotes(prev => prev.map((vote, i) => {
        if (i == index) {
            return {...vote, selected: !vote.selected}
        }

        return vote;
    }))
    
    return (
        <ul className={`upvote-list ${selected ? 'selected' : ''}`} onClick={onSelect}>
            {[...Array(count)].map((_, index) => (
                <li key={`item-${index}`}>
                    <FaArrowUp />
                </li>
            ))}
        </ul>
    )
}