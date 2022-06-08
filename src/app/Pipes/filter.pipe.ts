import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any  ) : any {

    if(!args ){
      return value;
    }else{
      args=args.toLocaleLowerCase();
    }
   
    return value.filter((note:any) =>{
      return note.title.toLocaleLowerCase().includes(args) | note.description.toLocaleLowerCase().includes(args);
     
    })
    //return null;
  }

}

//   transform(value: any, message: string) {
//     if (value.length === 0 || message === '') {
//       return value;
//     }
//     const NoteArray = [];
//     for (const note of value) {
//       if (note.title.includes(message)) {
//         NoteArray.push(note);
//       }
//     }
//     return NoteArray;
//   }

// }



