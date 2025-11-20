describe('Testes E2E - Lista de Leitura', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/lista_leitura_react/');
  });

  it('Deve renderizar a página inicial corretamente', () => {
    cy.contains('Bem-vindo à sua Lista de Leitura').should('be.visible');
    cy.contains('Iniciar').should('be.visible')
  });

  it('Deve navegar para a página de busca ao clicar no botão "Iniciar"', () => {
    cy.url().should('include', '/')
  });

  it('Deve buscar livros e exibir resultados', () => {
      cy.contains('Iniciar').click()
    cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiAutocomplete-input')
      .type('Harry Potter')
    cy.wait(500)
    cy.contains('Harry Potter').should('be.visible')  
});


  it('Deve adicionar um livro à lista de leitura', () => {
    cy.contains('Iniciar').click()
    cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiAutocomplete-input')
      .type('Harry Potter')
    cy.wait(500)
    cy.get('[data-testid="PlaylistAddIcon"]')
      .first()
      .click()
    cy.get('button[aria-label="Close"]').should('be.visible')
  })

  it('Deve exibir a lista de leitura com o livro adicionado', () => {
    cy.contains('Iniciar').click()
    cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiAutocomplete-input')
      .type('Harry Potter e a Pedra Filosofal')
    cy.get('[data-testid="PlaylistAddIcon"]')
      .first()
      .click()
    cy.get('button[aria-label="Close"]').click()
   cy.get('button[type="button"]').contains('Minha Lista').click()
    cy.get('span.MuiTypography-body1').should('be.visible')
  })
  it('Deve deletar o livro', () => {
  cy.contains('Iniciar').click()
    cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiAutocomplete-input')
      .type('Harry Potter')
    cy.wait(500)
    cy.get('[data-testid="PlaylistAddIcon"]')
      .first()
      .click()
    cy.get('button[aria-label="Close"]').click()
   cy.get('button[type="button"]').contains('Minha Lista').click()
    cy.get('button[aria-label="Remover da lista"]').click()
  })
  it('Pagina Sobre', () => {
    cy.contains('button', 'Sobre').click()
    cy.contains('h1', 'Lista de Leitura').should('be.visible')
    cy.get('h6.MuiTypography-h6').should('have.text', 'Aplicação React simples para gerenciar uma lista de livros. Este projeto foi feito como conteudo avalitivo da disciplina de Desenvolvimento Web Backend do curso de Analise e Desenvolvimento de Sistemas da Univerisdade Tecnologica Federal do Paraná (UTFPR) Permite buscar livros usando a API do Google Livros, adicionar à lista de leitura, editar, excluir e marcar como lidos.')

  })
})
