import { FaArrowUp } from "react-icons/fa";

export default function UpVoteArrow({ index }: { index: number}) {
    return (
        <li key={`item-${index}`}>
            <FaArrowUp aria-label={`Vote arrow ${index + 1}`} />
        </li>
    );
} 