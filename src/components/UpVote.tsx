import { UpVoteProps } from "../types";
import UpVoteButton from "./UpVoteButton";
import UpVoteList from "./UpVoteList";

export default function UpVote({ votes, setVotes }: UpVoteProps) {

    return votes.map((vote, index) => (
        <div key={`vote-${index}`} className="upvote-container">
            <UpVoteList {...vote} />
            <UpVoteButton setVotes={setVotes} index={index} />
        </div>
    ))    
}