Lobibox.notify.DEFAULTS=$.extend({},Lobibox.notify.DEFAULTS,{size:"mini",sound:false,icon:false,title:false,position:"bottom right",showAfterPrevious:true,continueDelayOnInactiveTab:false,delay:7000});
	function nr(a,b){a=Math.ceil(a);b=Math.floor(b);return Math.floor(Math.random()*(b-a+1))+a}
	function ar(a){return a[Math.floor(Math.random()*a.length)]}
	var notificacoes=["<b>"+nr(123,339)+"</b> pessoas estão visualizando esta oferta agora","<b>"+nr(43,93)+"</b> pessoas compraram <b>LotoPremium</b> na última hora","<b>"+ar(["Rogério","Jackson","Irineu","Ricardo","Bernardo","Rafael","Elias","Iago","Noah","Kaique","Benício","Nathan","Eduardo","Bruno","Lucas","Hugo","Enzo","Isaac","Oliver","Gabriel","Rodrigo","Rodrigo","Elias","Caio","Enzo","Oliver","Renan","Manoel"])+"</b> comprou <b>LotoPremium</b> há poucos minutos","As licenças do sistema estão acabando...","<b>"+ar(["Ana","Laura","Beatriz","Flávia","Maria","Alice","Helena","Aline","Joana","Fernanda","Sueli","Sophia","Jaqueline","Elisa","Rayssa","Renata","Catarina","Isabela","Alana","Antonella","Eloá","Ana","Sebastiana","Stefany","Mariane","Letícia","Marcela"])+"</b> acabou de comprar <b>LotoPremium</b>"];
	for(var i=0;i<notificacoes.length;i++){setTimeout("Lobibox.notify('success',{msg:notificacoes["+i+"]})",(i+1)*12000)}
