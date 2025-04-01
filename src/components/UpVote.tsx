import { useContext } from "react";
import UpVoteButton from "./UpVoteButton";
import UpVoteList from "./UpVoteList";
import { UpVotesContext } from "../contexts/UpVotesContext";

export default function UpVote() {
    const context = useContext(UpVotesContext)

    if (!context) {
        throw new Error("Error");
    }

    const { votes } = context

    return votes.map((vote, index) => (
        <div key={`vote-${index}`} className="upvote-container">
            <UpVoteList {...vote} index={index} />
            <UpVoteButton index={index} />
        </div>
    ))    
}