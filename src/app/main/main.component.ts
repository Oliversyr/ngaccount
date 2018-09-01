import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  asideList: Array<any> = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
    this.asideList = [
      {moduleId: 1, name: '记录', path: '/main/record', active: true},
      {moduleId: 2, name: '账户', path: '/main/account'},
      {moduleId: 3, name: '收入类别', path: '/main/input'},
      {moduleId: 4, name: '支出类别', path: '/main/output'},
      {moduleId: 5, name: '数据分析', path: '/main/data'},
    ]
  }

  asideClick(list) {
    console.log(list)
    this.router.navigate([list.path]);
    this.asideList.forEach((item) => {
      item.active = item.moduleId === list.moduleId; 
    })

  }

}
