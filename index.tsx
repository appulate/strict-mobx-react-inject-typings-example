import React from "react";
import { inject } from "mobx-react";

interface Store {
	data: string;
}

interface Props {
	data: string; // There is no need to declare this prop as optional.
}

function Component(props: Props) {
	return <div>{props.data.length}</div>;
}

{
	const WrapperComponent = inject(({ store }: { store: Store }) => ({
		data: store.data,
	}))(Component);

	<WrapperComponent />;
}

{
	const WrapperComponent = inject(({ store }: { store: Store }) => ({
		data: store.data.length,
	}))(Component); // There is no error with the official typings.

	<WrapperComponent />;
}
