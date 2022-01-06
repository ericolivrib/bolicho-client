import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Produto } from 'src/app/model/produto';

@Component({
   selector: 'app-adicionar-produto',
   templateUrl: './adicionar-produto.component.html',
   styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {

   produto!: Produto;
   form!: FormGroup

   constructor() { }

   ngOnInit(): void {
   }

}
