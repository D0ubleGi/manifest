import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  Renderer2,
  Inject,
  PLATFORM_ID,
  viewChild
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { SocketService } from './socket.services';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';
import { EmptyError, repeat } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,  HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
   constructor(
    private cdRef: ChangeDetectorRef,
    private renderer: Renderer2,
    private http: HttpClient,
    private socket: SocketService,
    private elRef: ElementRef,
    private router: Router,
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object  
  ) {}
username='';
email='';
password='';
passi='';
Idd='';
inpii=''
useri='';
maxx='';
genidi='';
tasknamee='';
tasktitlee='';
taskdescription='';
curridi='';
idi='';
idii='';
tasskname=''; 
tassktitle=''; 
tasskdesc='';
adds=false;
checks=false;
act=false;
naxe=false;
items: string[]=[];
valid1=false;
valid2=false;
valid3=false;
glist=''
gtask=''
private handlerr?: () => void;
us='';
nami='';
 deferredPrompt: any;
currid='';
@ViewChild('register') register!: ElementRef<HTMLDivElement>
@ViewChild('loging') login!: ElementRef<HTMLDivElement>
@ViewChild('idregister') idregister!: ElementRef<HTMLDivElement>
@ViewChild('Todolists') Todolists!: ElementRef<HTMLDivElement>
@ViewChild('indiv') indiv!: ElementRef<HTMLDivElement>
@ViewChild('idcrate') idcrate!: ElementRef<HTMLDivElement>
@ViewChild('todos') todos!: ElementRef<HTMLDivElement>
@ViewChild('lists') lists!: ElementRef<HTMLDivElement>
@ViewChild('cratetask') cratetask!: ElementRef<HTMLDivElement>
@ViewChild('takn') takn!: ElementRef<HTMLDivElement>
@ViewChild('ttaknn') ttaknn!:ElementRef<HTMLDivElement>
@ViewChild('todoss') todoss!: ElementRef<HTMLDivElement>
@ViewChild('validation1') validation1!: ElementRef<HTMLParagraphElement>
@ViewChild('validation2') validation2!: ElementRef<HTMLParagraphElement>
@ViewChild('validation3') validation3!: ElementRef<HTMLParagraphElement>
@ViewChild('validation4') validation4!: ElementRef<HTMLParagraphElement>
@ViewChild('validation5') validation5!: ElementRef<HTMLParagraphElement>
@ViewChild('validation6') validation6!: ElementRef<HTMLParagraphElement>
@ViewChild('validation7') validation7!: ElementRef<HTMLParagraphElement>
@ViewChild('validation8') validation8!: ElementRef<HTMLParagraphElement>
@ViewChild('validation9') validation9!: ElementRef<HTMLParagraphElement>
@ViewChild('validation10') validation10!: ElementRef<HTMLParagraphElement>
@ViewChild('validation11') validation11!: ElementRef<HTMLParagraphElement>
@ViewChild('validation12') validation12!: ElementRef<HTMLParagraphElement>
@ViewChild('validation13') validation13!: ElementRef<HTMLParagraphElement>
@ViewChild('validation14') validation14!: ElementRef<HTMLParagraphElement>
@ViewChild('validation15') validation15!: ElementRef<HTMLParagraphElement>
@ViewChild('validation16') validation16!: ElementRef<HTMLParagraphElement>
@ViewChild('validation17') validation17!: ElementRef<HTMLParagraphElement>
@ViewChild('validation19') validation19!: ElementRef<HTMLParagraphElement>
@ViewChild('task') task!: ElementRef<HTMLDivElement>
@ViewChild('sataske') sataske!: ElementRef<HTMLDivElement>
@ViewChild('button8') button8!: ElementRef<HTMLButtonElement>
@ViewChild('remove') remove!: ElementRef<HTMLButtonElement>
@ViewChild('usure') usure!: ElementRef<HTMLParagraphElement>
@ViewChild('yesno') yesno!: ElementRef<HTMLDivElement>
@ViewChild('button17') button17!: ElementRef<HTMLButtonElement>
@ViewChild('usis') usis!: ElementRef<HTMLDivElement>
@ViewChild('userss') userss!:ElementRef<HTMLDivElement>
@ViewChild('addmore') addmore!:ElementRef<HTMLButtonElement>
@ViewChild('button20') button20!: ElementRef<HTMLButtonElement>
@ViewChild('saaide') saaide!: ElementRef<HTMLDivElement>
@ViewChild('saaidee') saaidee!: ElementRef<HTMLDivElement>
@ViewChild('inpi') inpi!: ElementRef<HTMLInputElement>
@ViewChild('searchts') searchts!: ElementRef<HTMLDivElement>
@ViewChild('srch') srch!: ElementRef<HTMLDivElement>
@ViewChild('liske') liske!: ElementRef<HTMLDivElement>
@ViewChild('salike') salike!: ElementRef<HTMLDivElement>
@ViewChild('ko') ko!: ElementRef<HTMLDivElement>
@ViewChild('yessno') yessno!: ElementRef<HTMLDivElement>
@ViewChild('button117') button117!: ElementRef<HTMLButtonElement>
@ViewChild('button2') button2!: ElementRef<HTMLButtonElement>
@ViewChild('button5') button5!: ElementRef<HTMLButtonElement>
@ViewChild('usuree') usuree!: ElementRef<HTMLParagraphElement>
@ViewChild('button10') button10!: ElementRef<HTMLButtonElement>
@ViewChild('install') install!: ElementRef<HTMLDivElement>
ngOnInit() { 
  this.socket.onerror((err)=>{
    if(err==='utaken'){
      this.validation4.nativeElement.textContent="❌ Username is already taken!";
      this.validation4.nativeElement.style.color='red';
    }
    if(err==='etaken'){
      this.validation4.nativeElement.textContent='❌ Email is already taken!';
      this.validation4.nativeElement.style.color='red';
    }
    if(err==='eutaken'){
      this.validation4.nativeElement.textContent='❌ Username and email is taken!';
      this.validation4.nativeElement.style.color='red';
    }
    setTimeout(() => {
      this.validation4.nativeElement.textContent='';
    }, 4000);
  });
  this.socket.onsuccess((succ)=>{
    if(succ==='added'){
      this.validation4.nativeElement.textContent="✅ Registered successfully!"
      this.validation4.nativeElement.style.color='green';
      setTimeout(() => {
        this.validation4.nativeElement.textContent='';
        this.validation4.nativeElement.style.color='red';
        this.register.nativeElement.style.display='none';
    this.login.nativeElement.style.display='flex';
      }, 3000);
    }
  });


  this.socket.onsignin((vall,usero)=>{
    if(vall==='nousername'){
      this.validation6.nativeElement.textContent="* Wrong username!";
      setTimeout(() => {
        this.validation6.nativeElement.textContent='';

      }, 2500);
    }
    if(vall==='nopassword'){
      this.validation7.nativeElement.textContent='* Wrong user password!';
      setTimeout(() => {
      this.validation7.nativeElement.textContent='';
      }, 2500);
    }
    if(vall==='logged'){
      this.us=this.useri;
      setTimeout(() => {
        this.login.nativeElement.style.display='none';
  this.Todolists.nativeElement.style.display='flex';
  this.install.nativeElement.style.display='none';
      }, 500);  
      this.socket.load(usero);
    }
  });
  this.socket.oncheck((resp)=>{
    if(resp==='exists'){
      this.validation10.nativeElement.textContent='❌ this id already exists!';
      setTimeout(() => {
        this.validation10.nativeElement.textContent='';
      }, 2500);
    }
    if(resp==='addd'){
      this.validation10.nativeElement.textContent='✅ New Id added!';
      this.validation10.nativeElement.style.color='green';
      setTimeout(() => {
        this.validation10.nativeElement.style.color='red';
        this.validation10.nativeElement.textContent='';
        this.idcrate.nativeElement.style.display='none';
        this.Todolists.nativeElement.style.display='flex'; 
        this.socket.load(this.useri);
      }, 2500);
    }
  });

  this.socket.onAdded((respi)=>{
    if(respi==="addded"){
      this.validation12.nativeElement.textContent='✅ Successfully added!';
      this.validation12.nativeElement.style.color='green';
      setTimeout(() => {
        this.idregister.nativeElement.style.display='none';
        this.Todolists.nativeElement.style.display='flex';
        this.validation12.nativeElement.style.color='red';
        this.validation12.nativeElement.textContent='';
        this.socket.load(this.useri);
      }, 2500);
      this.todos.nativeElement.innerHTML='';
    }
    if(respi==='erri'){
      this.validation12.nativeElement.textContent='❌ Max amount of users reached for this Id!';
      setTimeout(() => {
        this.validation12.nativeElement.textContent='';
      }, 2500);
    }
    if(respi==='errii'){
      this.validation5.nativeElement.textContent='❌ Wrong Id!';
      setTimeout(() => {
        this.validation5.nativeElement.textContent='';
      }, 2500);
    }
    if(respi==='aro'){
      this.validation5.nativeElement.textContent='❌ Already registered!';
      setTimeout(() => {
        this.validation5.nativeElement.textContent='';
      }, 2500);
    }
  });

  this.socket.onload((tasks)=>{
    if(tasks.length===0){
      this.todos.nativeElement.style.display='flex';
      this.todos.nativeElement.style.justifyContent='center';
      this.todos.nativeElement.style.alignItems='center';
      this.todos.nativeElement.textContent='No added lists!';
    }
    else{
      this.todos.nativeElement.style.display='';
      this.todos.nativeElement.style.justifyContent='normal';
      this.todos.nativeElement.style.alignItems='auto';
      this.todos.nativeElement.textContent='';
    this.todos.nativeElement.innerHTML='';
    this.renderer.addClass(this.remove.nativeElement,'hov1');
    const taski=JSON.stringify(tasks);
    tasks.forEach((element: { name: any; id:any; }) => {
      const divi = document.createElement('div');
      this.renderer.addClass(divi,'lists');
      divi.textContent=element.name;
      divi.addEventListener('click',()=>{
        const namm=element.name;
         if(this.act){
          this.yesno.nativeElement.style.display='flex';
          this.usure.nativeElement.textContent=`Are you sure you want to delete "${namm}"?`
         const handler = () => {
          const elid=element.id;
          const elnam=element.name;
          this.socket.removeid(elid,elnam,this.useri);
  this.button17.nativeElement.removeEventListener('click',handler);
};
this.addmore.nativeElement.disabled=true;
this.button17.nativeElement.addEventListener('click', handler);
    }
    else{
        const idd=element.id;
        this.socket.tasks(idd);
        setTimeout(() => {
          this.Todolists.nativeElement.style.display='none';
        this.liske.nativeElement.style.display='none';
        this.lists.nativeElement.style.display='flex';  
        this.userss.nativeElement.style.display='flex';
        }, 1000);
        this.salike.nativeElement.innerHTML='';
        this.currid=element.id;
        const aa=element.id;
        console.log(element.id);
        this.socket.loadtasks(aa);
        this.socket.loadid(idd);
        this.socket.users(idd);
    }
      });
      this.todos.nativeElement.appendChild(divi);
    });
    if(this.remove.nativeElement.textContent==='✅ Done'){
    const haia=document.getElementsByClassName('lists');
for (let i = 0; i < haia.length; i++) {
  const el = haia[i] as HTMLElement;
  el.style.cursor= 'url("assets/images/icons8-x-18.png") 0 0, auto';
  }
}
}  this.srch.nativeElement.textContent="Search lists";
    this.searchts.nativeElement.style.display='flex';
    this.inpi.nativeElement.placeholder='Enter lists name...';
    this.inpi.nativeElement.title='Enter lists name!';
  });
  this.socket.onAddnew((rep,idd,iddd,taskname,tasktitle,taskdesc)=>{
    if(rep==='add'){
    this.validation16.nativeElement.textContent='✅ Successfully added!';
    this.validation16.nativeElement.style.color='green';
    this.socket.sende(idd,this.useri,taskname);
    setTimeout(() => {
      this.validation16.nativeElement.textContent='';
      this.cratetask.nativeElement.style.display='none';
      this.lists.nativeElement.style.display='flex';
      this.userss.nativeElement.style.display='flex';
      this.searchts.nativeElement.style.display='flex';
      this.saaide.nativeElement.style.display='flex';
      this.socket.loadtasks(this.currid);
    }, 3000);
  }
  if(rep==='aris'){
    this.yessno.nativeElement.style.display='flex';
    this.usuree.nativeElement.textContent=`Taskname "${taskname}" already exists!`;
       this.idi=idd;
       this.idii=iddd;
       this.tasskname=taskname; 
       this.tassktitle=tasktitle; 
       this.tasskdesc=taskdesc;
      this.naxe=true;
  }
  });

this.socket.onusers((userebi)=>{
  this.usis.nativeElement.innerHTML='';
userebi.forEach((element:{user:any}) => {
  const p=document.createElement('p');
  p.textContent=element.user;
  p.style.color='white';
  p.style.marginLeft=`${7}px`;
  this.usis.nativeElement.appendChild(p);
});
});
  this.socket.onloadtasks((taskunebi, idi) => {
  this.items = [];
  this.todoss.nativeElement.innerHTML = '';

  if (!taskunebi || taskunebi.length === 0) {
    this.todoss.nativeElement.style.display = 'flex';
    this.todoss.nativeElement.style.justifyContent = 'center';
    this.todoss.nativeElement.style.alignItems = 'center';
    this.todoss.nativeElement.textContent = 'No added lists!';
  } else {
    this.todoss.nativeElement.style.display = '';
    this.todoss.nativeElement.style.justifyContent = '';
    this.todoss.nativeElement.style.alignItems = '';
    this.todoss.nativeElement.textContent = '';

    taskunebi.forEach((element: {id:any, idd:any, taskname:any, tasktitle:any, taskdescription:any}) => {
      if (!this.items.includes(element.idd)) {
        const divi: HTMLDivElement = document.createElement('div');
        this.renderer.addClass(divi, 'lists');
        divi.textContent = element.taskname;
        this.items.push(element.idd);
        divi.addEventListener('click', () => {
          const taskn: string = element.taskname;
          const taskti: string = element.tasktitle + ':';
          const taskdesc: string = element.taskdescription;
          this.takn.nativeElement.textContent = taskn;
          this.ttaknn.nativeElement.textContent = taskti;
          this.sataske.nativeElement.textContent = taskdesc;
          this.curridi = element.idd;
          this.task.nativeElement.style.display = 'flex';
          this.lists.nativeElement.style.display = 'none';
          this.searchts.nativeElement.style.display = 'none';
          this.liske.nativeElement.style.display = 'none';
          this.salike.nativeElement.innerHTML = '';
        });

        this.todoss.nativeElement.appendChild(divi);
      }
    });
  }

  this.searchts.nativeElement.style.display = 'flex';
  this.srch.nativeElement.textContent = "Search tasks";
  this.inpi.nativeElement.placeholder = 'Enter tasks name...';
  this.inpi.nativeElement.title = 'Enter tasks name!';

});

     this.socket.onloadtaskss((taskunebii)=>{
      setTimeout(() => {
        this.items = [];
  this.todoss.nativeElement.innerHTML = '';
      taskunebii.forEach((element: {id:any,idd:any,taskname:any,tasktitle:any,taskdescription:any})=>{ 
      if(!this.items.includes(element.idd)){
      const divi=document.createElement('div');
      this.renderer.addClass(divi,'lists');
      divi.textContent=element.taskname;
      this.items.push(element.idd);
      divi.addEventListener('click',()=>{
        const taskn=element.taskname;
        const taskti=element.tasktitle+':';
        const taskdesc=element.taskdescription; 
        this.curridi=element.idd;
        this.takn.nativeElement.textContent=taskn;
        this.ttaknn.nativeElement.textContent=taskti;
        this.sataske.nativeElement.textContent=taskdesc;
        this.task.nativeElement.style.display='flex';
        this.lists.nativeElement.style.display='none';
      });
      this.todoss.nativeElement.appendChild(divi);
    }
    }); 
    },1000);
  });

  this.socket.oncompleted((del)=>{
    if(del==='ara'){
      this.validation17.nativeElement.textContent=`Behave urself woman!!!`;
      this.validation17.nativeElement.style.color='red';
    }
    else{
    this.validation17.nativeElement.textContent=`✅Task ${JSON.stringify(del)} completed successfully!`;
    this.validation17.nativeElement.style.color='green';
    this.socket.sendee(this.currid,this.useri,JSON.stringify(del));
    }
    setTimeout(() => {
      this.validation17.nativeElement.textContent='';
      this.validation17.nativeElement.style.color='none';
      this.task.nativeElement.style.display='none';
      this.lists.nativeElement.style.display='flex';
      this.socket.loadtasks(this.currid);
    }, 2300);
  
  });

  this.socket.onloadid((idda)=>{
    setTimeout(() => {
    this.saaide.nativeElement.style.display='flex';
    this.saaidee.nativeElement.textContent=idda;
    }, 450);
  });

  this.socket.onsearch((loadd)=>{
    if(loadd.length===0){
      this.salike.nativeElement.textContent='No lists found!';
      this.salike.nativeElement.style.display='flex';
      this.salike.nativeElement.style.justifyContent='center';
      this.salike.nativeElement.style.alignItems='center';
    }else{
      this.salike.nativeElement.textContent='';
      this.salike.nativeElement.style.display='';
      this.salike.nativeElement.style.justifyContent='normal';
      this.salike.nativeElement.style.alignItems='auto';
    loadd.forEach((element: {id:any,name:any}) => {
      const divi = document.createElement('div');
      this.renderer.addClass(divi,'lists');
      divi.textContent=element.name;
      divi.style.width=`${230}px`;
      divi.style.height=`${25}px`;
      divi.addEventListener('click',()=>{
        const namm=element.name;
        const idd=element.id;
        this.socket.tasks(idd);
        this.Todolists.nativeElement.style.display='none';
        this.currid=element.id;
        const aa=element.id;console.log(element.id);
        this.lists.nativeElement.style.display='flex';
        this.liske.nativeElement.style.display='none';
        this.salike.nativeElement.innerHTML='';
        this.socket.loadtasks(aa);
        this.socket.loadid(idd);
        this.socket.users(idd);
        setTimeout(() => {
           this.userss.nativeElement.style.display='flex';
        }, 500);
      });
      this.salike.nativeElement.appendChild(divi);
    });
  } 
    this.ko.nativeElement.textContent=`Lists named: ${this.glist}`;

  });

  this.socket.onsearchh((tas)=>{
     if(tas.length===0){
      this.salike.nativeElement.textContent='No tasks found!';
      this.salike.nativeElement.style.display='flex';
      this.salike.nativeElement.style.justifyContent='center';
      this.salike.nativeElement.style.alignItems='center';
    }else{
      this.salike.nativeElement.textContent='';
      this.salike.nativeElement.style.display='';
      this.salike.nativeElement.style.justifyContent='normal';
      this.salike.nativeElement.style.alignItems='auto';
  tas.forEach((element: {id:any,idd:any,taskname:any,tasktitle:any,taskdescription:any})=>{
      const divi=document.createElement('div');
      this.renderer.addClass(divi,'lists');
      divi.textContent=element.taskname;
      divi.style.width=`${230}px`;
      divi.style.height=`${25}px`;
      console.log(element.id,element.idd,element.taskdescription,element.taskname,element.tasktitle)
      divi.addEventListener('click',()=>{
        const taskn=element.taskname;
        const taskti=element.tasktitle+':';
        const taskdesc=element.taskdescription;
        this.takn.nativeElement.textContent=taskn;
        this.ttaknn.nativeElement.textContent=taskti;
        this.sataske.nativeElement.textContent=taskdesc;
        this.task.nativeElement.style.display='flex';
        this.lists.nativeElement.style.display='none';
        this.searchts.nativeElement.style.display='none';
        this.searchts.nativeElement.style.display='flex';
        this.liske.nativeElement.style.display='none';
        this.salike.nativeElement.innerHTML='';
   this.srch.nativeElement.textContent="Search tasks";
    this.inpi.nativeElement.placeholder='Enter tasks name...';
    this.inpi.nativeElement.title='Enter tasks name!';
      });
      this.salike.nativeElement.appendChild(divi);
      
  });
}
this.ko.nativeElement.textContent=`Tasks named: ${this.gtask}`;    
  });
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault();
      this.deferredPrompt = e as BeforeInstallPromptEvent;
      console.log('PWA install prompt saved.');
      
    });

    this.socket.onsende((emails,taskname)=>{
      emails.forEach((element: any)=>{console.log(element);
         this.http.post("https://beckend2.onrender.com/send-email", {
  to: element,
  subject: "New Task Alert",
  text: `User ${this.useri}

  Added new task named ${taskname}!
  `
}).subscribe(res => {
  console.log(res);
});

      });
    });

    
    this.socket.onsendee((emails,taskname)=>{
      emails.forEach((element: any)=>{console.log(element);
         this.http.post("https://beckend2.onrender.com/send-email", {
  to: element,
  subject: "New Task Alert",
  text: `User ${this.useri}

  completed task named ${taskname}!
  `
}).subscribe(res => {
  console.log(res);
});

      });
    });
 }
ngAfterViewInit() { }
ngAfterViewChecked() { 
 }



submit() {
  if (this.username === '') {
    this.validation1.nativeElement.textContent = '* User field is empty!';
    setTimeout(() => {
      this.validation1.nativeElement.textContent='';
    }, 2500);
    this.valid1=false;
  } else {
    this.validation1.nativeElement.textContent = '';
    this.valid1=true;
  }

  if (this.email === '') {
    this.validation2.nativeElement.textContent = '* Email field is empty!';
    setTimeout(() => {
      this.validation2.nativeElement.textContent='';
    }, 2500);
    this.valid2=false;
  } else if (!this.validemail(this.email)) {
    this.validation2.nativeElement.textContent = '* Wrong email format!';
    setTimeout(() => {
      this.validation2.nativeElement.textContent='';
    }, 2500);
    this.valid2=false;
  } else {
    this.validation2.nativeElement.textContent = '';
    this.valid2=true;
  }

  if (this.password === '') {
    this.validation3.nativeElement.textContent = '* Password field is empty!';
    setTimeout(() => {
       this.validation3.nativeElement.textContent='';
    }, 2500);
    this.valid3=false;
  } else if (this.password.length < 8) {
    this.validation3.nativeElement.textContent = '* Password must be at least 8 characters!';
    setTimeout(() => {
          this.validation3.nativeElement.textContent='';
    }, 2500);
    this.valid3=false;
  } else if(this.password.length>16){
    this.validation3.nativeElement.textContent='* Password must be less than 16 characters!';
    setTimeout(() => {
      this.validation3.nativeElement.textContent='';
    }, 2500);
    this.valid3=false;
  } else {
    this.validation3.nativeElement.textContent = '';
    this.valid3=true;
  }
  if(this.valid1 && this.valid2 && this.valid3){
    this.socket.submit(this.username,this.email,this.password);
  }
}

Signin(){
if(this.useri===''){
  this.validation6.nativeElement.textContent='* Username field is empty!';
  setTimeout(() => {
    this.validation6.nativeElement.textContent='';
  }, 2500);
}
else{
  this.validation6.nativeElement.textContent=''
}
if(this.passi===''){
  this.validation7.nativeElement.textContent='* Password field is empty!'
  setTimeout(() => {
    this.validation7.nativeElement.textContent='';
  }, 2500);
}
else{
  this.validation7.nativeElement.textContent='';
}
if(this.useri!=='' && this.passi!==''){
  this.socket.signin(this.useri,this.passi);
}
}

Add(){
if(this.Idd===''){
  this.validation5.nativeElement.textContent='*Id field is empty!';
  setTimeout(() => {
    this.validation5.nativeElement.textContent='';
  }, 2500);
}
else{
  this.validation5.nativeElement.textContent='';
  this.socket.Add(this.Idd,this.us);
  this.button2.nativeElement.disabled=true;
  setTimeout(() => {
    this.button2.nativeElement.disabled=false;
  }, 3500);
}
}
cratee(){
this.idregister.nativeElement.style.display='none';
this.idcrate.nativeElement.style.display='flex';
}
signupp(){
  this.register.nativeElement.style.display='none';
  this.login.nativeElement.style.display='flex';
}
sign(){
  this.register.nativeElement.style.display='flex';
  this.login.nativeElement.style.display='none';
}
addnew(){
  this.Todolists.nativeElement.style.display='none';
  this.idregister.nativeElement.style.display='flex';
  this.searchts.nativeElement.style.display='none';
  this.liske.nativeElement.style.display='none';
  this.salike.nativeElement.innerHTML='';
  this.act=false;
   const haia=document.getElementsByClassName('lists');
for (let i = 0; i < haia.length; i++) {
  const el = haia[i] as HTMLElement;
  el.style.cursor= 'pointer';
  }
      this.remove.nativeElement.style.border='1px solid red';
    this.remove.nativeElement.textContent='❌ Remove list';
    this.renderer.removeClass(this.remove.nativeElement,'hov2');
    this.renderer.addClass(this.remove.nativeElement,'hov1');
    this.act=false;
    this.Todolists.nativeElement.style.cursor='default';
}
 validemail(ema: string): boolean {
 const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(ema);
}
generate(){
const id = this.generateUUIDv4(); 
console.log(id);
  this.indiv.nativeElement.textContent=id;
}
generateUUIDv4(): string {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

check(){
  const code=this.indiv.nativeElement.textContent;
   if(this.nami===''){
    this.validation11.nativeElement.textContent='* Id name field is empty!';
    setTimeout(() => {
    this.validation11.nativeElement.textContent='';
    }, 2500);
  }
  if(this.maxx===''){
    this.validation8.nativeElement.textContent='* Max users field is empty!';
    setTimeout(() => {
      this.validation8.nativeElement.textContent='';
    }, 2500);
  }
  else if(code===''){
    this.validation9.nativeElement.textContent='* Generate Id first!';
    setTimeout(() => {
      this.validation9.nativeElement.textContent='';
    }, 2500);
  }
  else{
    if(this.nami!==''){
    this.socket.check(code!,this.nami,this.maxx,this.useri);
    this.button5.nativeElement.disabled=true;
    setTimeout(() => {
      this.button5.nativeElement.disabled=false;
    }, 3500);
    }
  }
}
onlyDigits(event: KeyboardEvent) {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
}
bako(){
  this.Todolists.nativeElement.style.display='flex';
  this.idregister.nativeElement.style.display='none';
  this.searchts.nativeElement.style.display='flex';
  this.srch.nativeElement.textContent="Search lists";
  this.inpi.nativeElement.placeholder='Enter lists name...';
  this.inpi.nativeElement.title='Enter lists name!';
}
here(){
  this.idcrate.nativeElement.style.display='none';
  this.idregister.nativeElement.style.display='flex';
}
Addtask(){
this.lists.nativeElement.style.display='none';
this.cratetask.nativeElement.style.display='flex';
this.searchts.nativeElement.style.display='none';
this.liske.nativeElement.style.display='none';
this.salike.nativeElement.innerHTML='';
this.userss.nativeElement.style.display='none';
this.saaide.nativeElement.style.display='none';
}
baki(){
  
      this.Todolists.nativeElement.style.display='flex'
  this.lists.nativeElement.style.display='none';
  this.todoss.nativeElement.innerHTML='';
  this.items.length=0;
  this.userss.nativeElement.style.display='none';
  this.usis.nativeElement.innerHTML='';
  this.button20.nativeElement.style.display='none';
  this.saaide.nativeElement.style.display='none';
  this.saaidee.nativeElement.textContent='';
  this.liske.nativeElement.style.display='none';
  this.salike.nativeElement.innerHTML='';
  this.searchts.nativeElement.style.display='flex';
  this.srch.nativeElement.textContent="Search lists";
  this.inpi.nativeElement.placeholder='Enter lists name...';
  this.inpi.nativeElement.title='Enter lists name!';
}
gob(){
  this.task.nativeElement.style.display='none';
  this.lists.nativeElement.style.display='flex';
    this.searchts.nativeElement.style.display='flex';
   this.srch.nativeElement.textContent="Search tasks";
    this.inpi.nativeElement.placeholder='Enter tasks name...';
    this.inpi.nativeElement.title='Enter tasks name!';
}
Addi(){
  if(this.tasknamee===''){
    this.validation13.nativeElement.textContent='* Task name field is empty!';
    setTimeout(() => {
      this.validation13.nativeElement.textContent='';
    }, 2500);
  }
  if(this.tasktitlee===''){
    this.validation14.nativeElement.textContent='* Task title field is empty!';
    setTimeout(() => {
      this.validation14.nativeElement.textContent='';
    }, 2500);
  }
  if(this.taskdescription===''){
    this.validation15.nativeElement.textContent='* Task description field is empty!';
    setTimeout(() => {
      this.validation15.nativeElement.textContent='';
    }, 2500);
  }
  if(this.tasknamee!=='' && this.tasktitlee!=='' && this.taskdescription!==''){
    this.naxe=false;
    const ido = this.generateUUIDv44();
    this.socket.Addnew(this.currid,ido,this.tasknamee,this.tasktitlee,this.taskdescription,this.naxe);
    this.button8.nativeElement.disabled=true;
    setTimeout(() => {
      this.button8.nativeElement.disabled=false;
    }, 2500);
  }
}
completed(){
  this.socket.completed(this.curridi);
  this.button10.nativeElement.disabled=true;
  setTimeout(() => {
    this.button10.nativeElement.disabled=false;
  }, 3000);
}
generateUUIDv44(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
removee(){
  if(!this.act){
    this.remove.nativeElement.textContent='✅ Done';
    this.renderer.removeClass(this.remove.nativeElement,'hov1');
    this.renderer.addClass(this.remove.nativeElement,'hov2');
    this.remove.nativeElement.style.border='1px solid green';
    this.act=true;
this.Todolists.nativeElement.style.cursor = 'url("assets/images/icons8-x-18.png") 0 0, auto';console.log(this.Todolists.nativeElement.style.cursor);
const haia=document.getElementsByClassName('lists');
for (let i = 0; i < haia.length; i++) {
  const el = haia[i] as HTMLElement;
  el.style.cursor = 'url("assets/images/icons8-x-18.png") 0 0, auto';
  }
}
  else{
    const haia=document.getElementsByClassName('lists');
for (let i = 0; i < haia.length; i++) {
  const el = haia[i] as HTMLElement;
  el.style.cursor= 'pointer';
  }
      this.remove.nativeElement.style.border='1px solid red';
    this.remove.nativeElement.textContent='❌ Remove list';
    this.renderer.removeClass(this.remove.nativeElement,'hov2');
    this.renderer.addClass(this.remove.nativeElement,'hov1');
    this.act=false;
    this.Todolists.nativeElement.style.cursor='default';
  }
}
closee(){
  this.yesno.nativeElement.style.display='none';
  this.addmore.nativeElement.disabled=false;
}
gobo(){
  this.cratetask.nativeElement.style.display='none';
  this.lists.nativeElement.style.display='flex';
  this.searchts.nativeElement.style.display='flex';
  this.srch.nativeElement.textContent="Search tasks";
  this.inpi.nativeElement.placeholder='Enter tasks name...';
  this.inpi.nativeElement.title='Enter tasks name!';
  this.userss.nativeElement.style.display='flex';
  this.saaide.nativeElement.style.display='flex';
}
hide(){
  this.userss.nativeElement.style.display='none';
  this.button20.nativeElement.style.display='flex';
}
show(){
  this.userss.nativeElement.style.display='flex';
  this.button20.nativeElement.style.display='none';
}
search(){
if(this.inpii===''){
  this.validation19.nativeElement.textContent='* Name field in empty!'
  setTimeout(() => {
    this.validation19.nativeElement.textContent='';
  }, 2500);
}
else{
  if(this.inpi.nativeElement.placeholder==='Enter lists name...'){
  this.socket.search(this.inpii,this.useri);
  this.glist=this.inpii;
}
else{
  if(this.inpi.nativeElement.placeholder==='Enter tasks name...'){
    const text=this.saaidee.nativeElement.textContent;
    this.socket.searchh(this.inpii,text!);
    this.gtask=this.inpii;
  }
}
setTimeout(() => {
  this.searchts.nativeElement.style.display='none';
this.liske.nativeElement.style.display='flex';
}, 1000);
}
}
closse(){
  this.liske.nativeElement.style.display='none';
  this.searchts.nativeElement.style.display='flex';
  this.salike.nativeElement.innerHTML='';
}
allowOnlyNumbers(event: KeyboardEvent) {
  const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];
  if (allowedKeys.indexOf(event.key) !== -1) {
    return; 
  }
  if (!/^[0-9]$/.test(event.key)) {
    event.preventDefault(); 
  }
}
closeee(){
this.yessno.nativeElement.style.display='none';
}
clo(){
  this.socket.Addnew(this.idi,this.idii,this.tasskname,this.tassktitle,this.tasskdesc,this.naxe);
}
installApp(): void {
  if (this.deferredPrompt) {
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((choiceResult: { outcome: 'accepted' | 'dismissed'; platform: string }) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      this.deferredPrompt = null;
    });
  }
}

}

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}



