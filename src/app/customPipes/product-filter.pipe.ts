import { Pipe, PipeTransform } from '@angular/core';
import { Iposts } from '../shared/model/post';

@Pipe({
    name: 'productFilter',
    pure: true
})

export class ProductFilterPipe implements PipeTransform {
    transform(productposts: Iposts[], searchText: string): Iposts[]{
      if (!productposts || !searchText) {
        return productposts;
      }

      return productposts.filter(productpost =>
        productpost.product.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    }
}
