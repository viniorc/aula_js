# Git

## 1 - Configuração do usuário das alterações

Fonte: [Configuração do Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git)

### 1.1 Setando o nome

```js
git config --global user.name
"fulano de tal"
```

### 1.2 Setando o email

```js
git config --global user.email
"fulanodetal@exemplo.br"
```

## 2 -Subir alterações para o repositório remoto

### 1- Verificar as alterações

```js
git status
```
### 2- Adicionar as alterações que serão enviadas
```js
git add .
```
### 3- Conferir as alterações que serão enviadas
```js
git status
```
### 4 - Preparar as alterações que serão enviadas
```js
git commit -m "comentario"
```
### 5 - Conferir a preparação

```js
git status
```
### 6 - Subir para o repositório

```js
git push
```

