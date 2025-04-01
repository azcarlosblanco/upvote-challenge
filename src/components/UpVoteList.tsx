import { UpVoteListProps } from "../types";

export default function UpVoteList({ count, selected }: UpVoteListProps) {
    
    return (
        <ul className="upvote-list-container">
            {[...Array(count)].map((_, index) => (
                <li key={`item-${index}`}>arrow-up</li>
            ))}
        </ul>
    )
}