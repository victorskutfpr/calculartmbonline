import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  // masculino: 66 + (13,7 x peso) + (5 x altura) - (6,8 x idade)
  // feminino: 655 + (9,6 x peso) + (1,8 x altura) - (4,7 x idade)
  // niveis atividade
  // 1.2 - sedentário
  // 1.375 - pouco ativo
  // 1.55 - moderadamente ativo
  // 1.725 - muito ativo
  // 1.9 - extremamente ativo

  opcoes = [
    { value: '1.2', viewValue: 'Sedentário' },
    { value: '1.375', viewValue: 'Pouco Ativo' },
    { value: '1.55', viewValue: 'Moderadamente Ativo' },
    { value: '1.725', viewValue: 'Muito Ativo' },
    { value: '1.9', viewValue: 'Extremamente Ativo' }
  ]

  sexo:any = 'M';
  peso:any = 0;
  altura:any = 0;
  idade:any = 0;
  nivelAtividade:any = "";
  resultadoSemEx = 0;
  resultado:any = 0;

  selecaoSexo($event:any) {
    this.sexo = $event.target.value;
  }

  calcular() {
    let pesocalc = 13.7 * parseFloat(this.peso);
    let alturacalc = 5 * parseFloat(this.altura);
    let idadecalc = 6.8 * parseFloat(this.idade);

    if (this.sexo == 'M') {
      this.resultado = 66 + (13.7 * this.peso) + (5 * this.altura) - (6.8 * this.idade);
    } else {
      this.resultado = 655 + (9.6 * this.peso) + (1.8 * this.altura) - (4.7 * this.idade);
    }

    if (this.nivelAtividade == "") {
      alert("Selecione um nível de atividade");
      this.resultado = 0;
    }
    else {
      this.resultadoSemEx = this.resultado;
      this.resultado = this.resultado * this.nivelAtividade;

    }

  }
}
