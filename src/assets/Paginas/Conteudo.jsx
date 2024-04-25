
import "../Paginas/Conteudo.css"


function Conteudo() {
  return (

    <main>
   <div id="linguagens">
    <div id="apresentação">
        <p>
            Vamos falar sobre a linguagem de marcação <span>HTML</span>
        </p>
    
        <p>A página tratará de como é importante a estrutura do HTML <br />
            e a estilização do CSS no projeto de um site, demonstrando <br />
             com imagens (salvas no próprio projeto) e vídeos postados <br />
             via link o desenvolvimento dessas ferramentas, que são a <br />
              porta de entrada para essa área de conhecimento, além de <br />
               sites para pesquisa de documentação dos vários recursos <br />
                disponibilizados, como o site w3school.
         </p>
    </div>
    <div id="link do video ou site">
        <a href="https://www.w3schools.com/html/">Saiba mais</a>
    </div>

    <div id="apresentação">
        <p>
            Vamos falar sobre a linguagem de marcação <span>CSS</span>
        </p>
    
        <p>CSS é uma linguagem de estilo usada para definir a apresentação e o <br />
             layout de documentos HTML (e outros tipos de documentos XML). <br />
             É uma das tecnologias fundamentais da web, juntamente com HTML e JavaScript. <br />
            O CSS é usado para controlar a aparência visual de um documento HTML. <br />
            Ele define como os elementos HTML devem ser exibidos na tela, incluindo <br />
             coisas como cores, fontes, espaçamento, posicionamento e tamanho. <br />
            Uma das principais vantagens do CSS é sua capacidade de separar o <br />
             conteúdo do documento (HTML) da sua apresentação (estilo). Isso <br />
              significa que você pode alterar o estilo de um site inteiro <br />
              simplesmente modificando um arquivo CSS, sem precisar mexer no HTML.
         </p>
    </div>
    <div id="link do video ou site">
        <a href="https://www.w3schools.com/css">Saiba mais</a>
    </div>

    <div id="apresentação">
             <p>
                 Vamos falar sobre a linguagem <span>JavaScript</span>
             </p>
         
             <p>A página demonstrará que essa linguagem permite a funcionalidade do site <br />
        portanto a programação do mesmo. No site serão disponibilizadas imagens <br />
        (salvas no próprio projeto) e vídeos via link explicando o funcionamento <br />
        da linguagem, além de sites para pesquisa de documentação dos vários <br />
        recursos disponibilizados em JavaScript, como o site w3school. <br />
         </p>
         </div>
         <div id="link do video ou site">
             <a href="#">Saiba mais</a>
         </div>
   </div>

   

   <div id="imagem-2">
    <img src="./img/htmlCssJS.png" alt="Relação entre HTML e CSS" />
   </div>

   
   </main>
  
   
   
  );
}

export default Conteudo;
