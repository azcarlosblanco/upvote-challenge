import UpVoteButton from "./UpVoteButton";
import UpVoteList from "./UpVoteList";
import { useUpVotes } from "../hooks/useUpVotes";

export default function UpVote() {
    const { votes } = useUpVotes();

    return votes.map((vote, index) => (
        <div key={`vote-${index}`} className="upvote-container">
            <UpVoteList {...vote} index={index} />
            <UpVoteButton index={index} />
        </div>
    ));    
}