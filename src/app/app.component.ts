import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tela-de-login';
  usuario: string = "";
  senha: string = ""; 

  ValidaUsuario(): void{
    const usuarioEsperado: string = "guidafront@FELChagashotmail.onmicrosoft.com";  
    const senhaEsperada: string = "94PgyhIUV7Te";

    if (usuarioEsperado == this.usuario)
    {
      if (senhaEsperada == this.senha)
      {
        return alert('Usuario e senha autenticados com sucesso');       
      }
      else {
        return alert('Senha invalida');
      }
    }
else {
  return alert('Usuario invalido');
}
}  

}
