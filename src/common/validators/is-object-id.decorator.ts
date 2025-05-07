import { registerDecorator, ValidationOptions } from "class-validator";
import { Types } from "mongoose";

export function isObjectId(validationOptions?: ValidationOptions) {
	return function (object: object, propertyName: string) {
		registerDecorator({
			name: "isObjectId",
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			validator: {
				validate(value: any) {
					return Types.ObjectId.isValid(value);
				},
				defaultMessage() {
					return `ID is an ObjectID invalid`;
				},
			},
		});
	};
}
