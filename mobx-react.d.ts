import { InferableComponentEnhancerWithProps } from "react-redux-typings-for-mobx-react";

declare module "mobx-react" {
	type MapStoresToProps<Stores, OwnProps, InjectedProps> = (state: Stores, ownProps: OwnProps) => InjectedProps;

	export function inject<Stores = unknown, OwnProps = unknown, InjectedProps = unknown>(
		fn: MapStoresToProps<Stores, OwnProps, InjectedProps>,
	): InferableComponentEnhancerWithProps<InjectedProps, OwnProps>;
}
