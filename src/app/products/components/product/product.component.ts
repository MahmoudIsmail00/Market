import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, FormsModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  @Input() item:any;

  @Output() itemData = new EventEmitter();

  addflag:boolean = false;

  amount:number = 0;
  constructor(){}

  ngOnInit(): void {

  }

  sendCart(){
    this.itemData.emit({item:this.item, quantity:this.amount});
  }

}
