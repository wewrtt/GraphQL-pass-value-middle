import { Query, Args, Int, Mutation, Subscription } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/category.create.dto';
import { PubSub } from 'graphql-subscriptions';
@Resolver('CategoryEntity')
export class CategoryResolver {
  constructor(private catgoryService: CategoryService) {
  }

  @Query((returns) => [CategoryEntity])
  getList(): Promise<CategoryEntity[]> {
    return this.catgoryService.getListV1();
  }

  @Query((returns) => CategoryEntity)
  async getDetail(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<CategoryEntity> {
    return this.catgoryService.getOne(id);
  }

  @Mutation((returns) => CategoryEntity)
  async createCategory(
    @Args('createCategoryDto') createCategoryDto: CreateCategoryDto,
  ) {
    const { name, img } = createCategoryDto;
    const data = { name, img };
    const category = await this.catgoryService.create(data);
    return category;
  }

}
