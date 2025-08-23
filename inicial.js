        document.addEventListener('DOMContentLoaded', function() {
            const topicos = document.querySelectorAll('.topicos');
            
            topicos.forEach(topico => {
                topico.addEventListener('click', function() {

                    topicos.forEach(t => t.classList.remove('ativo'));
                    
                    
                    this.classList.add('ativo');
                    
                    document.querySelectorAll('.conteudo').forEach(c => {
                        c.classList.remove('ativo');
                    });
                    
                    const conteudoId = this.getAttribute('data-conteudo') + '-conteudo';
                    document.getElementById(conteudoId).classList.add('ativo');
                });
            });
        });


 document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('botao');
    const conteudoExtra = document.querySelector('.conteudo-extra');
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    
    botao.addEventListener('click', function() {
        if (conteudoExtra.style.display === 'block') {
            conteudoExtra.style.display = 'none';
            botao.textContent = 'Leia mais';
            botao.classList.remove('active');
            botao.style.transform = `translate(0, 0)`; 
        } else {
            conteudoExtra.style.display = 'block';
            botao.textContent = 'Mostrar menos';
            botao.classList.add('active');
            
            if (mediaQuery.matches) {
                botao.style.transform = `translate(0, 17.5vh)`; // mobile
            } else {
                botao.style.transform = `translate(85vw, 15vh)`; // desktop
            }
        }
    });
});


