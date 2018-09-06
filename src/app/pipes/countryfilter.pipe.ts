import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryfilter'
})
export class CountryfilterPipe implements PipeTransform {

    transform(items: any[], args?: any): any {

	if(!args){
		return items;
	}
	
    return items.filter(item => {
		return item.country.toLowerCase() === args.toLowerCase() ;
	});
	
   }

}
