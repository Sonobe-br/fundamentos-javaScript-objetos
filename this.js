let pessoa1 = {
    nome: 'Chris',
    saudacao: function() {
      alert('Oi! Meu nome é ' + this.nome + '.');
    }
  }
  console.log(pessoa1)

  let pessoa2 = {
    nome: 'Brian',
    saudacao: function() {
      alert('Oi! Meu nome é ' + this.nome + '.');
    }
  } 