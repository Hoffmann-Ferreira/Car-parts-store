import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [UsersModule, ProductsModule, CategoryModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
