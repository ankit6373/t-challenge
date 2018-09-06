import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languagefilter'
})
export class LanguagefilterPipe implements PipeTransform {

    transform(items: any[], args?: any): any {
	  
	if(!args){
		return items;
	}
	
	return items.filter(item => {
		    return item.language.toLowerCase() === args.toLowerCase() ;
	});
  
  }

}
