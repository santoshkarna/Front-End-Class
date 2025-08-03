import { AfterContentInit, Component, ContentChild, ElementRef } from "@angular/core";


@Component({
    selector: 'app-child3',
    template: `
    <div>
     <h3>Inside Child Component3</h3>
      <ng-content></ng-content>
    </div>
    `
})
export class Child3Component  implements AfterContentInit{
   

    @ContentChild('projectedContent') contentRef!: ElementRef

     ngAfterContentInit(): void {
       console.log('project content: ', this.contentRef.nativeElement.textContent);
    }

}
