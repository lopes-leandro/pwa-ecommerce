import { Connection } from 'mongoose';
import { ProductsSchema } from '../schemas/product.schema';

export const productsProvider = [{
    provide: 'ProductsModelToken',
    useFactory: (connection: Connection) => connection.model('products', ProductsSchema),
    inject: ['DbConnectionToken'],
}];
