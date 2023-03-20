import { ReactNode } from "react";

interface Props {
    text: string;
}

const Button = ({text}: Props) => {
    return <button type="button" className="btn btn-primary">{text}</button>

}

export default Button;