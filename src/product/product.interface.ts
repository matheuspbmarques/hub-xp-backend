export interface Product extends Document {
	readonly name: string;
	readonly description: string;
	readonly price: string;
	readonly categoryIds: Array<string>;
	readonly imageUrl: string;
}
