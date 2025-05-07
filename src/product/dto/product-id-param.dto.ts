import { isObjectId } from "src/common/validators/is-object-id.decorator";

export class ProductIdParamDto {
	@isObjectId()
	id: string;
}
