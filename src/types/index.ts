export type Vote = {
    count: number;
    selected: boolean
}

export type Votes = Vote[];

export type UpVoteButtonProps = {
    index: number;
}

export type UpVoteListProps = Vote & UpVoteButtonProps;

export type UpVotesContextType = {
    votes: Votes;
    onIncrement: (index: number) => void;
    onSelect: (index: number) => void;
}