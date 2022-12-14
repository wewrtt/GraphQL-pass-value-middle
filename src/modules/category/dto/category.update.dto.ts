import { PartialType } from "@nestjs/swagger";
import { CreateCategoryDto } from "./category.create.dto";

export class UpadateCategoryDto extends PartialType(CreateCategoryDto) {
}