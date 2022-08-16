import { Pipe, PipeTransform } from "@angular/core";
import { SearchFilterPipe } from "../services/search-filter.pipe";
@Pipe({
    name:'searchFilter2'
})

export class SearchFilterPipe2 implements PipeTransform
{
    transform(list: any[], filterText: string): any {
        return list ? list.filter(item => item.matchType.search(new RegExp(filterText, 'i')) > -1) : [];
      }
    
    
} 