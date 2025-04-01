import { UpVoteButtonProps } from "../types";

export default function UpVoteButton({ setVotes, index }: UpVoteButtonProps) {
    const onIncrement = () => setVotes(prev => prev.map((vote, i) => {
        if (i == index) {
            return {...vote, count: vote.count + 1}
        }

        return vote;
    }))

    return (
        <button onClick={onIncrement}>plus-sign</button>
    )
}