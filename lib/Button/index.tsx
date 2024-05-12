import { FC, ReactNode } from "react";

type ButtonProps = {
	children?: ReactNode;
};

export const Button: FC<ButtonProps> = ({ children }): ReactNode => {
	return <button>{children}</button>;
};
