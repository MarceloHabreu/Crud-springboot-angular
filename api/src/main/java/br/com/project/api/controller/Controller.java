package br.com.project.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.project.api.model.Client;
import br.com.project.api.repository.Repositorio;

@RestController
@CrossOrigin(origins = "*") // * Liberando a porta de qualquer acesso para o front-end
public class Controller {

  @Autowired
  private Repositorio acao;

  @PostMapping("/")
  public Client cadastrar(@RequestBody Client c) {
    return acao.save(c);
  }

  @GetMapping("/")
  public Iterable<Client> Selecionar() {
    return acao.findAll();
  }

  @PutMapping("/")
  public Client editar(@RequestBody Client c) {
    return acao.save(c);
  }

  @DeleteMapping("/{codigo}")
  public void remover(@PathVariable long codigo) {
    acao.deleteById(codigo);
  }
}
