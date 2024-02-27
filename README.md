# OnCarTest
Siga os passos para rodar a aplicação. 
Front-End desenvolvido utilizando Visual Studio Code 2022 e Back-end no Visual Studio 2022 

Tecnologias utilizadas
______________________________________________________________
**Front-end**
Angular 15.2.0
Node 18.14.2
Bootstrap 5.3.3
Bootstrap-icons 1.11.3
Sweetalert2 11.10.5

**Back-end**
.Net 6.0
EF Core 6.0.27
NewtonsoftJson 6.0.27
SQL-Server 16.0.10


Pre-requisito
______________________________________________________________

Instalar Dotnet EF versao 6.0.12

1 - Abrir menu View, Other Window, click em Package Manager Console

dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.27
dotnet tool install --global dotnet-ef --version 6.0.27

2 - Ter instalado o SqlServer com acesso a localhost (caso a instância do sqlserver localhost
tenha outro nome, devera ser alterado nas connections strings, no appsettings.development da camada de API)


Executar Migrations
______________________________________________________________

1 - Abrir menu View, Other Window, click em Package Manager Console
2 - Dar o comando "dir" e logo apos entrar na camada da Migration com o comando cd OnCarVManager.Infra.Data
3 - No console que abrir escolher o Default Project como OnCarVManager.Infra.Data no combobox
4 - Executar o comando
	dotnet ef database update (Este comando irá criar as duas entidades necessárias no sql server)


Executando Projeto para teste
______________________________________________________________

1 - Ambos projetam devem rodar juntos, tanto a camada OnCarVManager.API quanto o projeto em front-end.

1.1 - Abra o projeto dentro do diretório OnCarVManager.Web (sugiro que faça isso utilizando o VS Code 2022)

1.2 - No terminal integrado do VS Code 2022 (para abrí-lo aperte ctrl+") rode o comando "npm i" para instalar os packages necessarios do angular.

2 - Ainda com a ferramenta Visual Studio Installer aberta verificar se os pacotes abaixo estao instalados
     - Na sessao Asp.NET e desenvolvimento WEB - "Modelo de projetos e item do .NET Framework" 
     - Na sessao Asp.NET e desenvolvimento WEB - "Modelo de projetos adicionais (versoes anteriores) 

3 - Abrir a solucao no Visual Studio 2022, apos feito as intalacoes dos pacotes mencionados acima.

4 - Rodar Aplicacao

Ambos os projetos irão rodar em paralelo, verificar se a Api rodara na porta https://localhost:7091/,
caso na maquina aonde sera feito o teste essa porta estiver ocupada devera alterar no arquivo
Environment.ts do front end a nova porta da api. 

