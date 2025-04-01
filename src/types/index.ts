import { Dispatch, SetStateAction } from "react";

export type Vote = {
    count: number;
    selected: boolean
}

export type Votes = Vote[];

export type UpVoteProps = {
    votes: Votes;
    setVotes: Dispatch<SetStateAction<Votes>>;
}

export type UpVoteButtonProps = {
    setVotes: Dispatch<SetStateAction<Votes>>;
    index: number;
}

export type UpVoteListProps = Vote & UpVoteButtonProps;

