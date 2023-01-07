import{Injectable} from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs';
import{Producto} from '../models/producto.model';
import{Envio}from '../models/envio.model';
import{Cliente}from '../models/cliente.model';

@Injectable({
  providedIn:'root'
})

export class PeticionesService {
  
  public url:string;

  constructor(public _http:HttpClient){
      this.url="";  //AQUI ES DONDE VA LO QUE CREE EN AMAZON
  }
  getDespacho():Observable<any>{
    return this._http.get(this.url+'api-eva6/envios/getenvios');
  }
  getProducto():Observable<any>{
    return this._http.get(this.url+'api-eva6/productos/getproductos');
  }
  getCliente():Observable<any>{
    return this._http.get(this.url+'api-eva6/clientes/getclientes');
  }
  addProducto(producto): Observable<Producto>{
    return this._http.post<Producto>(this.url+'api-eva6/productos/addproductos',producto);
  }
  addDespacho(envio):Observable<Envio>{
    return this._http.post<Envio>(this.url+'api-eva6/envios/addenvios',envio);
  }
  addCliente(cliente):Observable<Cliente>{
    return this._http.post<Cliente>(this.url+'api-eva6/clientes/addclientes',cliente);
  }
}
//Chequear link y sacar lo innecesario.