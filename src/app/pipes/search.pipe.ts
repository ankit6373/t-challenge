import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(items: any[], args?: any): any {
        
		if(!args){
		    return items;
	    }
		
		return items.filter(item => {
		    return item.movie_title.toLowerCase().includes(args.toLowerCase() )   ;
	    });	
		
    }

}
