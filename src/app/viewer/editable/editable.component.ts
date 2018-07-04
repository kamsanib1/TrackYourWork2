import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css']
})
export class EditableComponent implements OnInit, AfterViewInit,OnChanges {
  expandable:boolean;
  expand:boolean;
  editable:boolean;
  @Input() title:String;
  @Input() content:String;
  @Input() height:number;
  displayContent:String;
  editableContent:String;
  @ViewChild('textarea') textArea:ElementRef;

  constructor() { }

  ngOnInit() {
    this.expand = false;
    this.editable = false;
    console.log(this.height,this.content); 
    if(this.height === undefined){ this.height= 50;}
    if(this.content === undefined) { this.setContent(); }
    console.log( this.height,this.content );
    this.displayContent = this.content.slice(0,300)+' ....';
  }

  ngAfterViewInit(){
    console.log('view init() called.');
    //this.textArea.nativeElement.focus();
    this.resize();
  }

  ngOnChanges(){
    if(this.textArea!==null && this.textArea!==undefined){
      this.resize();
    }
  }

  toggleContent():void{
    if(!this.editable)
      this.expand=!this.expand;
    this.displayContent = this.content.slice(0,300)+'....';
    if(this.expand)
      this.displayContent = this.content;
  }

  enableEditing():void{
    this.editable=true;
    this.expand=true;
    this.editableContent = this.content.slice(0);
    this.resize();
  }
  resize():void{
    let input;
    input = document.getElementById('input');
    console.log('input',input);
    if(input!==undefined && input !== null){
      input.style.height='auto';
      input.style.height = input.scrollHeight+'px';
      if(input.scrollHeight > window.innerHeight * 0.8) 
        input.style.height = window.innerHeight * 0.8;
    }
  }
  i:number = 0;
  updateContent():void{
    console.log("text area updated:"+this.i);
    this.i++;
    setTimeout(this.resize,2000);
  }

  disableEditing(update:boolean):void{
    this.editable=false;
    this.expand=true;
    if(update){
      this.content = this.editableContent;
      this.displayContent = this.editableContent;
    }
  }
  
  setContent():void{
    this.content =`scape Navigator was inspired by the success of the Mosaic web browser, which was co-written by Marc Andreessen, a part-time employee of the National Center for Supercomputing Applications and a student at the University of Illinois. After Andreessen graduated in 1993, he moved to California and there met Jim Clark, the recently departed founder of Silicon Graphics. Clark believed that the Mosaic browser had great commercial possibilities and provided the seed money. Soon Mosaic Communications Corporation was in business in Mountain View, California, with Andreessen as a vice-president. Since the University of Illinois was unhappy with the company's use of the Mosaic name, the company changed its name to Netscape Communications (thought up by Product Manager Greg Sands[citation needed]) and named its flagship web browser Netscape Navigator.

    Netscape announced in its first press release (13 October 1994) that it would make Navigator available without charge to all non-commercial users, and beta versions of version 1.0 and 1.1 were indeed freely downloadable in November 1994 and March 1995, with the full version 1.0 available in December 1994. Netscape's initial corporate policy regarding Navigator claimed that it would make Navigator freely available for non-commercial use in accordance with the notion that Internet software should be distributed for free.[6]
    
    However, within two months of that press release, Netscape apparently reversed its policy on who could freely obtain and use version 1.0 by only mentioning that educational and non-profit institutions could use version 1.0 at no charge.[7]
    
    The reversal was complete with the availability of version 1.1 beta on 6 March 1995, in which a press release states that the final 1.1 release would be available at no cost only for academic and non-profit organizational use. Gone was the notion expressed in the first press release that Navigator would be freely available in the spirit of Internet software.
    
    Some security experts and cryptographers found out that all released Netscape versions had major security problems with crashing the browser with long URLs and 40 bits encryption keys.[8][9]
    
    The first few releases of the product were made available in “commercial” and “evaluation” versions; for example, version “1.0” and version “1.0N”. The “N” evaluation versions were completely identical to the commercial versions; the letter was there to remind people to pay for the browser once they felt they had tried it long enough and were satisfied with it. This distinction was formally dropped within a year of the initial release, and the full version of the browser continued to be made available for free online, with boxed versions available on floppy disks (and later CDs) in stores along with a period of phone support. During this era, "Internet Starter Kit" books were popular, and usually included a floppy disk or CD containing internet software, and this was a 
    pop`;
  }
}
