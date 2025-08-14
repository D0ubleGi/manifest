
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { max } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({ providedIn: 'root' })
export class SocketService {
  private socket!: Socket;
  isBrowser: boolean = false;
constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  this.isBrowser = isPlatformBrowser(this.platformId);

  const savedName = this.isBrowser ? localStorage.getItem('name') : '';
  const savedPassword = this.isBrowser ? localStorage.getItem('password') : '';

this.socket = io('https://list-backend-jzt8.onrender.com', {
  transports: ['polling'], 
  withCredentials: false,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
  timeout: 20000,
  auth: {
    name: savedName || '',
    pass: savedPassword || ''
  }
});
    this.socket.io.on('reconnect_attempt', () => {
      console.log('[Debug] Attempting to reconnect...');
    });

    this.socket.io.on('reconnect', (attempt: any) => {
      console.log(`[Debug] Reconnected after ${attempt} attempts, new socket id: ${this.socket.id}`);
    });

    this.socket.on('connect', () => {
      console.log('[Debug] Connected to Socket.IO server:', this.socket.id);
    });

    this.socket.on('connect_error', (err: { message: any }) => {
      console.error('[Debug] Socket connection error:', err.message);
    });
  }

  submit(user:string,email:string,password:string){
    this.socket.emit('register',user,email,password);
  }
  onerror(callback: (err:string)=>void){
    this.socket.on('register-taken',(err:string)=>{
      callback(err);
    });
  }
   onsuccess(callback:(succ:string)=>void){
    this.socket.on('register-success',(succ:string)=>{
      callback(succ);
    });
    }

    signin(user:string,pass:string){
      this.socket.emit('login',user,pass);
    }
    onsignin(callback:(vall:string,user:string)=>void){
      this.socket.on('wronguser',(vall:string,user:string)=>{
        callback(vall,user);
      });
    }
    Add(Idd:string,user:string){
      this.socket.emit('Add',user,Idd);
    }
    onAdded(callback: (respi:string)=>void){
      this.socket.on('respi',(respi:string)=>{
        callback(respi);
      });
    }

    check(idd:string,nami:string,maxx:string,useri:string){
      this.socket.emit('check',idd,nami,maxx,useri);
    }
    oncheck(callback: (resp:string)=>void){
      this.socket.on('resp',(resp:string)=>{
        callback(resp);
      });
    }

    load(user:string){
      this.socket.emit('load',user);
    }
    onload(callback: (tasks:any)=>void){
      this.socket.on('loaded',(tasks:any)=>{
        callback(tasks);
      });
    }
    tasks(id: any){
      this.socket.emit('tasks',id);
    }

    Addnew(idd:string,iddd:string,taskname:string,tasktitle:string,taskdesc:string,naxe:boolean){
      this.socket.emit('addnew',idd,iddd,taskname,tasktitle,taskdesc,naxe);
    }
    onAddnew(callback: (rep:string,idd:string,iddd:string,taskname:string,tasktitle:string,taskdesc:string)=>void){
      this.socket.on('rep',(rep:string,idd:string,iddd:string,taskname:string,tasktitle:string,taskdesc:string)=>{
        callback(rep,idd,iddd,taskname,tasktitle,taskdesc);
      });
    }
    loadtasks(idd:string){
      this.socket.emit('laodtasks',idd);
    }
    onloadtasks(callback: (taskunebi:any,ids:string)=>void){
      this.socket.on('taskunebi',(taskunebi:any,ids:string)=>{
        callback(taskunebi,ids);
      });
    }
    completed(idd:string){
      this.socket.emit('complete',idd);
    }
    oncompleted(callback:(del:any)=>void){
      this.socket.on('deleted',(del:any)=>{
        callback(del);
      });
    }
      onloadtaskss(callback: (taskunebii:any)=>void){
      this.socket.on('taskunebii',(taskunebii:any)=>{
        callback(taskunebii);
      });
    }

    removeid(id:string,nam:string,usa:string){
      this.socket.emit('remv',id,nam,usa);
    }
    users(id:string){
      this.socket.emit('users',id);
    }
    onusers(callback:(users:any)=>void){
      this.socket.on('userebi',(users:any)=>{
        callback(users);
      });
    }

    loadid(id:string){
      this.socket.emit('idebi',id);
    }
    onloadid(callback: (idda:string)=>void){
      this.socket.on('loaad',(idda:string)=>{
        callback(idda);
      });
    }

    search(name:string,us:string){
      this.socket.emit('searchh',name,us);
    }
     searchh(name:string,us:string){
      this.socket.emit('searchhh',name,us);
    }
    onsearch(callback:(tas:any)=>void){
      this.socket.on('found',(tas:any)=>{
        callback(tas);
      });
    }
    onsearchh(callback:(tas:any)=>void){
      this.socket.on('foundd',(tas:any)=>{
        callback(tas);
      });
    }
}


