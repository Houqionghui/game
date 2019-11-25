let number=0;
$(function () {
  $(document).ready(function () {
   number= Math.ceil(Math.random()*2); 
    console.log(number);
    if(number==1){
      $(".rule").load("./role.html") 
      $('.rolebegin').hide(); 
    }else if(number==2){
      $(".rule").load("./roletwo.html")  
      $('.context').hide()
      $('.import .imges').hide();
      $('.rolebegin').show();
    }
  });
});

(function(){
  let bemoney=30; //拥有的30元
  let timeleft=5; //对方做决策时间
  let give=0;     //给对方的钱数
  let zsmoney=0;
  let opposite=0  //角色二对方分给我的
  let gain=0; //角色二暂时得到的钱
  let momentmoney=0; //角色二最终获得
  let zzmoney=0 //返回的钱
  let zhmoney=0; //最后得到的钱
  let btns=document.getElementById('btn');//  确定按钮
  let rolebegin=document.getElementsByClassName('rolebegin')[0];
  // let Mymoney=document.getElementsByClassName('Mymoney')[0];
  // let Myinput=Mymoney.getElementsByTagName('input')[0];
  let luggage=document.getElementById('luggage');
  function Buttons(){
    btn.addEventListener('click',function(){
      var flag = $("input[name='box']:checked").val();
      give=Number(flag)
    })
  }
  Buttons();


  $(".believe .begin").click('ontouchstart', function () {
    status = false
    $(".believe .begin").css('box-shadow', 'none')
    setTimeout(function () {
      $('.believe').fadeOut(500)
      $('.mission').fadeIn(500)
      // refresh()
    }, 300)
  })
  
  function await(){
    rolebegin.addEventListener('click',function(){
      $('.awaitIng').show();
      setTimeout(function () {
        $('.awaitIng').hide();
        // let item=[0, 5, 10, 15, 30, 25, 30];
        let item=[0];
        let domItem = item[Math.floor(Math.random() * item.length)]; 
        opposite=Number(domItem);
        gain=opposite*3;
        bemoney-=domItem; //剩下的钱
        $('.rolebegin').hide();
        luggage.style.display='block';
        awaitIng();
        noMoney();
        }, 3000)
    },false)
  }
await();

function noMoney(){

}
function awaitIng(){
  let noMoney=document.getElementById('noMoney');
  let Forever=document.getElementsByClassName('Forever')[0];
  if(opposite==0){
    noMoney.style.display='block';
    luggage.style.display='none';
    Forever.addEventListener('click',function(){
      window.location.reload();
    },false)
  }else{
    let html='';
    html+=`
  <div class="luggageBox">
  <div class="person">对方给了您${opposite}元</div>
    <div class="getMoney">您暂时得到${gain}元</div>
    <div class="resolve">您决定返还给对方多少元?</div>
     <div class="Mymoney"><input type="text" placeholder="请输入"> 
      <button id="buton">确定</button></div>
  </div>
    `;
    luggage.innerHTML+=html;
    let Mymoney=document.getElementsByClassName('Mymoney')[0];
    let field=Mymoney.getElementsByTagName('input')[0];
    buton.addEventListener('click',function(){
      let data=field.value;
      let datas=Number(data);
      give=datas
      let value=data.replace(/[^\d]/g,'');
      if(data!==value || datas>=gain ||data==''){
        // alert('请输入0-20');
      } else{
        momentmoney=gain;
        momentmoney-=give;
        $('.mission').fadeOut(500)
        $('.follow').fadeIn(500)
        context();
      }
    },false)
  }

}
    btns.addEventListener('click', function(){
        bemoney-=give;
        zsmoney=give*3;
        //  zzmoney=Math.floor(Math.random()*zsmoney+0);
         if(give==0){
          zzmoney=0;
         }else if(give==5){
           let items=[2,3]
          let randomItem = items[Math.floor(Math.random() * items.length)];   
          console.log(randomItem);
          zzmoney=randomItem;
         }else if(give==10){
           let Titems=[5,6];
           let randomItem = Titems[Math.floor(Math.random() * Titems.length)];   
          // console.log(randomItem);
          zzmoney=randomItem;
         } else if(give==15){
          let Titems=[9,10];
          let randomItem = Titems[Math.floor(Math.random() * Titems.length)];   
          zzmoney=randomItem;
         } else if(give==20){
          let Titems=[12, 13, 14];
          let randomItem = Titems[Math.floor(Math.random() * Titems.length)];   
          zzmoney=randomItem;
         } else if(give==25){
          let Titems=[16, 17, 18];
          let randomItem = Titems[Math.floor(Math.random() * Titems.length)];   
          zzmoney=randomItem;
         }else if(give==30){
          let Titems=[21, 22, 23, 24];
          let randomItem = Titems[Math.floor(Math.random() * Titems.length)];   
          zzmoney=randomItem;
         }
        // console.log(zzmoney);
        zhmoney=bemoney+zzmoney;
       $('.awaitIng').show();
        let countDown = setInterval(function () {
          timeleft--
          // $('.awaitIng .timeout').html(`${timeleft}`)
          if (timeleft == 0) {
            clearInterval(countDown)
            $('.mission').fadeOut(500)
            $('.follow').fadeIn(500)
            context();
          }
        }, 1000)

      // setTimeout(function () {
      //   $('.mission').fadeOut(500)
      //   $('.awaitIng').fadeIn(500)
       
      // }, 300)
      
    },false)
  function context(){
    let anew=document.getElementsByClassName('anew')[0];
 
    if(number==1){
      $('.follow .result').html(`
      <div class="cyclo"> <span></span><span></span></div>
    <div class="title">恭喜两位用户完成了游戏！</div>
    <div class="earnings">您在游戏中的收益如下</div>
    <div class="decide">您决定分给对方<span>${give}</span>元,自己留下<span>${bemoney}</span>元,对方暂时得到<span>${zsmoney}</span>元。</div>
    <div class="return">对方决定返还给您<span>${zzmoney}</span>元</div>
    <div class="obtain"><div class="left"></div>您最终获得<span>${zhmoney}</span>元<div class="right"></div></div>

    `);
    }else if(number==2){
      $('.follow .result').html(`
      <div class="cyclo"> <span></span><span></span></div>
    <div class="title">恭喜两位用户完成了游戏！</div>
    <div class="earnings">您在游戏中的收益如下</div>
    <div class="decide">对方决定分给您<span>${opposite}</span>元,自己留下<span>${bemoney}</span>元,您暂时得到<span>${gain}</span>元。</div>
    <div class="return">您决定返还给对方<span>${give}</span>元</div>
    <div class="obtain"><div class="left"></div>您最终获得<span>${momentmoney}</span>元<div class="right"></div></div>

    `);
    }

    anew.addEventListener('click',function(){
      window.location.reload();
    },false)
  
  }
})(document);

