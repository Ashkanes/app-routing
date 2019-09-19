import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
server: {id: number, name:string, status: string}
  constructor(private router: ActivatedRoute,
     private serverservice: ServersService,
     private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.server = this.serverservice.getServer(id);
      }
    )
  }
  onEditServer(){
    this.route.navigate(['edit'], {relativeTo: this.router});
  }
}
