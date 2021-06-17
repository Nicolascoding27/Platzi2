import { Injectable } from '@angular/core';
import {Product} from '../../../product.model'
import{HttpClient, HttpClientModule} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  PRODUCTOS_API='http://platzi-store.herokuapp.com/products'
  constructor(
    private http: HttpClient,
  ) { }
  //vamos a creaar un metodo que me devuelva todos los productos. 
  getAllProducts(){
    return this.http.get<Product[]>('http://platzi-store.herokuapp.com/products')
  }
  getProduct(id:string){
    return this.http.get<Product>(`this.PRODUCTOS_API/${id}`)
  }//tipamos la variable
}
